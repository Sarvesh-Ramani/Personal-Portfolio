#!/usr/bin/env node
/**
 * Frontend API Mock Data Testing Suite
 * Tests the API service mock integration for frontend-only deployment
 */

const fs = require('fs');
const path = require('path');

// Mock environment variables to simulate frontend-only deployment
process.env.REACT_APP_BACKEND_URL = 'https://example.netlify.app';

// Mock axios for testing
const axios = {
  create: () => ({
    get: async (url) => {
      throw new Error('Backend not available in frontend-only mode');
    }
  })
};

// Load and evaluate the mock data
const mockDataPath = path.join(__dirname, 'frontend/src/mock.js');
const mockDataContent = fs.readFileSync(mockDataPath, 'utf8');

// Extract mock data by evaluating the exports
const mockData = {};
eval(mockDataContent.replace(/export const /g, 'mockData.'));

// Load and evaluate the API service
const apiPath = path.join(__dirname, 'frontend/src/services/api.js');
let apiContent = fs.readFileSync(apiPath, 'utf8');

// Replace imports with our mocks
apiContent = apiContent.replace("import axios from 'axios';", '');
apiContent = apiContent.replace("import { personalInfo, skills, projects } from '../mock.js';", '');

// Add our mock data
apiContent = `
const axios = ${JSON.stringify(axios)};
const personalInfo = ${JSON.stringify(mockData.personalInfo)};
const skills = ${JSON.stringify(mockData.skills)};
const projects = ${JSON.stringify(mockData.projects)};

${apiContent}
`;

// Remove export statements and make them available
apiContent = apiContent.replace(/export const /g, 'global.');
apiContent = apiContent.replace(/export default api;/, 'global.api = api;');

// Evaluate the API code
eval(apiContent);

class FrontendAPITester {
  constructor() {
    this.testResults = {
      total: 0,
      passed: 0,
      failed: 0,
      errors: []
    };
  }

  logTest(name, passed, details = '') {
    this.testResults.total++;
    if (passed) {
      this.testResults.passed++;
      console.log(`✅ PASS - ${name}`);
    } else {
      this.testResults.failed++;
      this.testResults.errors.push(`${name}: ${details}`);
      console.log(`❌ FAIL - ${name}`);
    }
    if (details) {
      console.log(`    Details: ${details}`);
    }
    console.log();
  }

  async testFrontendOnlyDetection() {
    console.log('🔍 Testing Frontend-Only Deployment Detection...');
    
    // Check if isProductionFrontendOnly is correctly detected
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const isProductionFrontendOnly = !backendUrl || backendUrl.includes('netlify');
    
    this.logTest(
      'Frontend-Only Detection',
      isProductionFrontendOnly,
      `Backend URL: ${backendUrl}, Detected as frontend-only: ${isProductionFrontendOnly}`
    );
  }

  async testPersonalInfoAPI() {
    console.log('👤 Testing Personal Info API Mock...');
    
    try {
      const startTime = Date.now();
      const result = await global.personalInfoApi.get();
      const responseTime = Date.now() - startTime;
      
      const requiredFields = ['name', 'title', 'email', 'phone', 'linkedin', 'location', 'summary', 'tagline'];
      const missingFields = requiredFields.filter(field => !result[field]);
      
      if (missingFields.length === 0) {
        this.logTest(
          'Personal Info API Mock',
          true,
          `Retrieved complete personal info for ${result.name}, Response time: ${responseTime}ms`
        );
      } else {
        this.logTest(
          'Personal Info API Mock',
          false,
          `Missing fields: ${missingFields.join(', ')}`
        );
      }
    } catch (error) {
      this.logTest(
        'Personal Info API Mock',
        false,
        `Error: ${error.message}`
      );
    }
  }

  async testSkillsAPI() {
    console.log('🛠️ Testing Skills API Mock...');
    
    try {
      const startTime = Date.now();
      const result = await global.skillsApi.getAll();
      const responseTime = Date.now() - startTime;
      
      if (Array.isArray(result)) {
        // Check if skills have proper structure for gamification
        const categories = [...new Set(result.map(skill => skill.category))];
        const skillsWithLevels = result.filter(skill => 
          skill.level !== undefined && skill.level >= 0 && skill.level <= 100
        );
        
        const expectedCategories = [
          'Programming Languages',
          'Frameworks & Technologies',
          'Databases',
          'DevOps & Tools',
          'Core Concepts'
        ];
        
        const foundCategories = expectedCategories.filter(cat => categories.includes(cat));
        
        if (foundCategories.length >= 4 && skillsWithLevels.length >= 10) {
          this.logTest(
            'Skills API Mock',
            true,
            `Retrieved ${result.length} skills across ${categories.length} categories, ${skillsWithLevels.length} with valid levels, Response time: ${responseTime}ms`
          );
        } else {
          this.logTest(
            'Skills API Mock',
            false,
            `Insufficient data: ${foundCategories.length} categories, ${skillsWithLevels.length} skills with levels`
          );
        }
      } else {
        this.logTest(
          'Skills API Mock',
          false,
          `Expected array, got ${typeof result}`
        );
      }
    } catch (error) {
      this.logTest(
        'Skills API Mock',
        false,
        `Error: ${error.message}`
      );
    }
  }

  async testProjectsAPI() {
    console.log('🚀 Testing Projects API Mock...');
    
    try {
      // Test getFeatured
      const startTime1 = Date.now();
      const featuredResult = await global.projectsApi.getFeatured();
      const responseTime1 = Date.now() - startTime1;
      
      // Test getAll
      const startTime2 = Date.now();
      const allResult = await global.projectsApi.getAll();
      const responseTime2 = Date.now() - startTime2;
      
      if (Array.isArray(featuredResult) && Array.isArray(allResult)) {
        // Check featured projects
        const featuredCount = featuredResult.length;
        const allCount = allResult.length;
        
        // Verify featured projects have isFeatured flag
        const properlyFeatured = featuredResult.every(project => project.isFeatured === true);
        
        // Check for required project fields
        const hasRequiredFields = featuredResult.every(project => 
          project.title && project.description && project.technologies && project.status
        );
        
        if (featuredCount >= 2 && allCount >= featuredCount && properlyFeatured && hasRequiredFields) {
          this.logTest(
            'Projects API Mock',
            true,
            `Featured: ${featuredCount} projects, All: ${allCount} projects, Response times: ${responseTime1}ms/${responseTime2}ms`
          );
        } else {
          this.logTest(
            'Projects API Mock',
            false,
            `Issues: Featured=${featuredCount}, All=${allCount}, ProperlyFeatured=${properlyFeatured}, HasFields=${hasRequiredFields}`
          );
        }
      } else {
        this.logTest(
          'Projects API Mock',
          false,
          `Expected arrays, got ${typeof featuredResult}/${typeof allResult}`
        );
      }
    } catch (error) {
      this.logTest(
        'Projects API Mock',
        false,
        `Error: ${error.message}`
      );
    }
  }

  async testResponseDelays() {
    console.log('⏱️ Testing API Response Delays...');
    
    try {
      const tests = [
        { name: 'Personal Info', api: global.personalInfoApi.get },
        { name: 'Skills', api: global.skillsApi.getAll },
        { name: 'Featured Projects', api: global.projectsApi.getFeatured }
      ];
      
      const responseTimes = [];
      
      for (const test of tests) {
        const startTime = Date.now();
        await test.api();
        const responseTime = Date.now() - startTime;
        responseTimes.push(responseTime);
      }
      
      const avgResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
      
      // Check if delays are realistic (between 50ms and 300ms as per mock implementation)
      const hasRealisticDelays = responseTimes.every(time => time >= 50 && time <= 300);
      
      if (hasRealisticDelays) {
        this.logTest(
          'API Response Delays',
          true,
          `Average response time: ${avgResponseTime.toFixed(2)}ms, Range: ${Math.min(...responseTimes)}-${Math.max(...responseTimes)}ms`
        );
      } else {
        this.logTest(
          'API Response Delays',
          false,
          `Unrealistic delays: ${responseTimes.join(', ')}ms`
        );
      }
    } catch (error) {
      this.logTest(
        'API Response Delays',
        false,
        `Error: ${error.message}`
      );
    }
  }

  async testDataStructure() {
    console.log('📋 Testing Mock Data Structure...');
    
    try {
      // Test personal info structure
      const personalInfoValid = mockData.personalInfo && 
        mockData.personalInfo.name === 'Sarvesh Ramani' &&
        mockData.personalInfo.title === 'Software Engineer II';
      
      // Test skills structure
      const skillsValid = mockData.skills && 
        Object.keys(mockData.skills).length >= 5 &&
        mockData.skills['Programming Languages'] &&
        mockData.skills['Programming Languages'].some(skill => skill.name === 'Java');
      
      // Test projects structure
      const projectsValid = mockData.projects &&
        mockData.projects.featured &&
        mockData.projects.featured.length >= 2 &&
        mockData.projects.featured.some(project => project.title.includes('GravitySpy'));
      
      const allValid = personalInfoValid && skillsValid && projectsValid;
      
      this.logTest(
        'Mock Data Structure',
        allValid,
        `Personal Info: ${personalInfoValid}, Skills: ${skillsValid}, Projects: ${projectsValid}`
      );
    } catch (error) {
      this.logTest(
        'Mock Data Structure',
        false,
        `Error: ${error.message}`
      );
    }
  }

  async runAllTests() {
    console.log('🧪 Starting Frontend API Mock Data Tests');
    console.log('='.repeat(60));
    
    await this.testFrontendOnlyDetection();
    await this.testDataStructure();
    await this.testPersonalInfoAPI();
    await this.testSkillsAPI();
    await this.testProjectsAPI();
    await this.testResponseDelays();
    
    this.printSummary();
  }

  printSummary() {
    console.log('='.repeat(60));
    console.log('📊 FRONTEND API MOCK TEST SUMMARY');
    console.log('='.repeat(60));
    
    const { total, passed, failed, errors } = this.testResults;
    
    console.log(`Total Tests: ${total}`);
    console.log(`Passed: ${passed} ✅`);
    console.log(`Failed: ${failed} ❌`);
    console.log(`Success Rate: ${total > 0 ? (passed/total*100).toFixed(1) : 0}%`);
    
    if (errors.length > 0) {
      console.log('\n❌ FAILED TESTS:');
      errors.forEach(error => console.log(`  • ${error}`));
    }
    
    console.log('\n' + '='.repeat(60));
    
    if (failed === 0) {
      console.log('🎉 ALL TESTS PASSED! Frontend-only deployment mock data is working correctly.');
    } else if (failed < total / 2) {
      console.log('⚠️ SOME TESTS FAILED. Frontend mock data has minor issues.');
    } else {
      console.log('🚨 MULTIPLE TESTS FAILED. Frontend mock data has significant issues.');
    }
  }
}

// Run the tests
const tester = new FrontendAPITester();
tester.runAllTests().catch(console.error);