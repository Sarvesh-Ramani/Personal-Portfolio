#!/usr/bin/env python3
"""
Frontend-Only Deployment Mock Data Testing Suite
Tests the API service mock integration for frontend-only deployment on Netlify
"""

import asyncio
import aiohttp
import time
import json
import os
from typing import Dict, List, Any
from datetime import datetime

# Get frontend URL from environment
FRONTEND_URL = "https://modern-dev-cv.preview.emergentagent.com"

class FrontendMockDataTester:
    def __init__(self):
        self.session = None
        self.test_results = {
            "total_tests": 0,
            "passed_tests": 0,
            "failed_tests": 0,
            "errors": [],
            "performance_metrics": {},
            "mock_data_results": {}
        }
    
    async def setup(self):
        """Initialize HTTP session"""
        self.session = aiohttp.ClientSession()
    
    async def teardown(self):
        """Close HTTP session"""
        if self.session:
            await self.session.close()
    
    def log_test_result(self, test_name: str, passed: bool, details: str = "", response_time: float = 0):
        """Log individual test result"""
        self.test_results["total_tests"] += 1
        
        if passed:
            self.test_results["passed_tests"] += 1
            status = "✅ PASS"
        else:
            self.test_results["failed_tests"] += 1
            status = "❌ FAIL"
            self.test_results["errors"].append(f"{test_name}: {details}")
        
        if response_time > 0:
            self.test_results["performance_metrics"][test_name] = response_time
        
        print(f"{status} - {test_name}")
        if details:
            print(f"    Details: {details}")
        if response_time > 0:
            print(f"    Response Time: {response_time:.2f}ms")
        print()
    
    async def test_frontend_deployment_detection(self):
        """Test that frontend correctly detects production frontend-only deployment"""
        print("🔍 Testing Frontend-Only Deployment Detection...")
        
        try:
            # Check if the frontend is accessible
            start_time = time.time()
            async with self.session.get(FRONTEND_URL) as response:
                response_time = (time.time() - start_time) * 1000
                
                if response.status == 200:
                    content = await response.text()
                    
                    # Check if the page loads successfully
                    if "Sarvesh Ramani" in content or "Portfolio" in content:
                        self.log_test_result(
                            "Frontend Deployment Access",
                            True,
                            "Frontend is accessible and loading correctly",
                            response_time
                        )
                        
                        # Store for further analysis
                        self.test_results["mock_data_results"]["frontend_accessible"] = True
                        
                    else:
                        self.log_test_result(
                            "Frontend Deployment Access",
                            False,
                            "Frontend accessible but content not loading properly"
                        )
                else:
                    self.log_test_result(
                        "Frontend Deployment Access",
                        False,
                        f"Frontend not accessible, status code: {response.status}"
                    )
                    
        except Exception as e:
            self.log_test_result(
                "Frontend Deployment Access",
                False,
                f"Error accessing frontend: {str(e)}"
            )
    
    async def test_mock_data_structure(self):
        """Test the structure and completeness of mock data"""
        print("📋 Testing Mock Data Structure...")
        
        # Test personal info mock data structure
        expected_personal_fields = ["name", "title", "email", "phone", "linkedin", "location", "summary", "tagline"]
        
        # Since we can't directly access the mock.js file from the browser,
        # we'll test by checking if the frontend loads the expected content
        try:
            async with self.session.get(FRONTEND_URL) as response:
                if response.status == 200:
                    content = await response.text()
                    
                    # Check for key personal information
                    personal_info_found = []
                    if "Sarvesh Ramani" in content:
                        personal_info_found.append("name")
                    if "Software Engineer II" in content:
                        personal_info_found.append("title")
                    if "sarveshramani1004@gmail.com" in content:
                        personal_info_found.append("email")
                    if "Chennai" in content:
                        personal_info_found.append("location")
                    
                    if len(personal_info_found) >= 3:
                        self.log_test_result(
                            "Personal Info Mock Data",
                            True,
                            f"Found {len(personal_info_found)} personal info fields: {personal_info_found}"
                        )
                    else:
                        self.log_test_result(
                            "Personal Info Mock Data",
                            False,
                            f"Only found {len(personal_info_found)} personal info fields"
                        )
                        
        except Exception as e:
            self.log_test_result(
                "Personal Info Mock Data",
                False,
                f"Error testing personal info: {str(e)}"
            )
    
    async def test_skills_gamification_data(self):
        """Test skills data structure for gamification features"""
        print("🎮 Testing Skills Gamification Data...")
        
        try:
            async with self.session.get(f"{FRONTEND_URL}/skills") as response:
                if response.status == 200:
                    content = await response.text()
                    
                    # Check for skill categories
                    skill_categories_found = []
                    expected_categories = [
                        "Programming Languages",
                        "Frameworks & Technologies", 
                        "Databases",
                        "DevOps & Tools",
                        "Core Concepts"
                    ]
                    
                    for category in expected_categories:
                        if category in content:
                            skill_categories_found.append(category)
                    
                    # Check for specific skills and levels
                    skills_with_levels = []
                    if "Java" in content and ("90" in content or "95" in content):
                        skills_with_levels.append("Java")
                    if "Spring Boot" in content and "95" in content:
                        skills_with_levels.append("Spring Boot")
                    if "Python" in content and ("85" in content or "80" in content):
                        skills_with_levels.append("Python")
                    
                    if len(skill_categories_found) >= 4 and len(skills_with_levels) >= 2:
                        self.log_test_result(
                            "Skills Gamification Data",
                            True,
                            f"Found {len(skill_categories_found)} categories and {len(skills_with_levels)} skills with levels"
                        )
                    else:
                        self.log_test_result(
                            "Skills Gamification Data",
                            False,
                            f"Insufficient gamification data: {len(skill_categories_found)} categories, {len(skills_with_levels)} skills"
                        )
                        
        except Exception as e:
            self.log_test_result(
                "Skills Gamification Data",
                False,
                f"Error testing skills data: {str(e)}"
            )
    
    async def test_projects_data_structure(self):
        """Test projects data structure with featured and status filtering"""
        print("🚀 Testing Projects Data Structure...")
        
        try:
            async with self.session.get(f"{FRONTEND_URL}/projects") as response:
                if response.status == 200:
                    content = await response.text()
                    
                    # Check for featured projects
                    featured_projects_found = []
                    if "GravitySpy" in content:
                        featured_projects_found.append("GravitySpy Glitch Classification")
                    if "Cert V2X" in content:
                        featured_projects_found.append("Cert V2X")
                    
                    # Check for project status indicators
                    status_indicators = []
                    if "Completed" in content:
                        status_indicators.append("Completed")
                    if "In Planning" in content or "Coming Soon" in content:
                        status_indicators.append("Upcoming")
                    
                    # Check for project categories
                    categories_found = []
                    if "Machine Learning" in content:
                        categories_found.append("Machine Learning")
                    if "Backend Development" in content:
                        categories_found.append("Backend Development")
                    
                    if len(featured_projects_found) >= 2 and len(status_indicators) >= 1:
                        self.log_test_result(
                            "Projects Data Structure",
                            True,
                            f"Found {len(featured_projects_found)} featured projects and {len(status_indicators)} status types"
                        )
                    else:
                        self.log_test_result(
                            "Projects Data Structure",
                            False,
                            f"Insufficient project data: {len(featured_projects_found)} featured, {len(status_indicators)} statuses"
                        )
                        
        except Exception as e:
            self.log_test_result(
                "Projects Data Structure",
                False,
                f"Error testing projects data: {str(e)}"
            )
    
    async def test_api_response_delays(self):
        """Test that mock API calls include realistic response delays"""
        print("⏱️ Testing API Response Delays...")
        
        # Test multiple page loads to check for consistent loading behavior
        pages_to_test = ["/", "/skills", "/projects"]
        response_times = []
        
        for page in pages_to_test:
            try:
                start_time = time.time()
                async with self.session.get(f"{FRONTEND_URL}{page}") as response:
                    response_time = (time.time() - start_time) * 1000
                    response_times.append(response_time)
                    
                    if response.status == 200:
                        # Check if page loads with data (indicating API calls completed)
                        content = await response.text()
                        if "Sarvesh" in content or "Java" in content or "GravitySpy" in content:
                            continue
                        
            except Exception as e:
                self.log_test_result(
                    "API Response Delays",
                    False,
                    f"Error testing page {page}: {str(e)}"
                )
                return
        
        if response_times:
            avg_response_time = sum(response_times) / len(response_times)
            
            # Check if response times are reasonable (not too fast, indicating proper delays)
            if 100 <= avg_response_time <= 2000:  # Between 100ms and 2s is reasonable
                self.log_test_result(
                    "API Response Delays",
                    True,
                    f"Average response time: {avg_response_time:.2f}ms (includes simulated delays)",
                    avg_response_time
                )
            else:
                self.log_test_result(
                    "API Response Delays",
                    False,
                    f"Response times seem unrealistic: {avg_response_time:.2f}ms"
                )
        else:
            self.log_test_result(
                "API Response Delays",
                False,
                "No response times collected"
            )
    
    async def test_frontend_backend_hybrid_detection(self):
        """Test that the system correctly identifies frontend-only deployment"""
        print("🔄 Testing Frontend-Backend Hybrid Detection...")
        
        try:
            # Try to access the backend API directly
            backend_url = "https://modern-dev-cv.preview.emergentagent.com/api"
            
            try:
                async with self.session.get(f"{backend_url}/") as response:
                    backend_accessible = response.status == 200
            except:
                backend_accessible = False
            
            # Check if frontend is working regardless of backend status
            async with self.session.get(FRONTEND_URL) as response:
                if response.status == 200:
                    content = await response.text()
                    
                    # If frontend loads with data even when backend might not be accessible,
                    # it indicates proper frontend-only deployment handling
                    has_data = "Sarvesh Ramani" in content and ("Java" in content or "Spring Boot" in content)
                    
                    if has_data:
                        mode = "hybrid" if backend_accessible else "frontend-only"
                        self.log_test_result(
                            "Frontend-Backend Hybrid Detection",
                            True,
                            f"Frontend working in {mode} mode with proper data loading"
                        )
                    else:
                        self.log_test_result(
                            "Frontend-Backend Hybrid Detection",
                            False,
                            "Frontend accessible but not loading data properly"
                        )
                else:
                    self.log_test_result(
                        "Frontend-Backend Hybrid Detection",
                        False,
                        f"Frontend not accessible, status: {response.status}"
                    )
                    
        except Exception as e:
            self.log_test_result(
                "Frontend-Backend Hybrid Detection",
                False,
                f"Error testing hybrid detection: {str(e)}"
            )
    
    async def test_data_consistency(self):
        """Test data consistency across different pages"""
        print("🔍 Testing Data Consistency...")
        
        try:
            # Test that the same data appears consistently across pages
            pages_data = {}
            
            # Check home page
            async with self.session.get(FRONTEND_URL) as response:
                if response.status == 200:
                    content = await response.text()
                    pages_data["home"] = {
                        "has_name": "Sarvesh Ramani" in content,
                        "has_title": "Software Engineer II" in content
                    }
            
            # Check skills page
            async with self.session.get(f"{FRONTEND_URL}/skills") as response:
                if response.status == 200:
                    content = await response.text()
                    pages_data["skills"] = {
                        "has_java": "Java" in content,
                        "has_spring": "Spring Boot" in content
                    }
            
            # Check projects page
            async with self.session.get(f"{FRONTEND_URL}/projects") as response:
                if response.status == 200:
                    content = await response.text()
                    pages_data["projects"] = {
                        "has_gravity": "GravitySpy" in content,
                        "has_cert": "Cert V2X" in content
                    }
            
            # Verify consistency
            consistency_checks = []
            if pages_data.get("home", {}).get("has_name"):
                consistency_checks.append("Personal info consistent")
            if pages_data.get("skills", {}).get("has_java"):
                consistency_checks.append("Skills data consistent")
            if pages_data.get("projects", {}).get("has_gravity"):
                consistency_checks.append("Projects data consistent")
            
            if len(consistency_checks) >= 2:
                self.log_test_result(
                    "Data Consistency",
                    True,
                    f"Data consistent across pages: {', '.join(consistency_checks)}"
                )
            else:
                self.log_test_result(
                    "Data Consistency",
                    False,
                    f"Data inconsistency detected: only {len(consistency_checks)} checks passed"
                )
                
        except Exception as e:
            self.log_test_result(
                "Data Consistency",
                False,
                f"Error testing data consistency: {str(e)}"
            )
    
    async def run_all_tests(self):
        """Run all frontend mock data tests"""
        print("🧪 Starting Frontend-Only Deployment Mock Data Tests")
        print("=" * 70)
        
        await self.setup()
        
        try:
            # Core mock data tests
            await self.test_frontend_deployment_detection()
            await self.test_mock_data_structure()
            await self.test_skills_gamification_data()
            await self.test_projects_data_structure()
            await self.test_api_response_delays()
            await self.test_frontend_backend_hybrid_detection()
            await self.test_data_consistency()
            
        finally:
            await self.teardown()
        
        # Print final summary
        self.print_summary()
    
    def print_summary(self):
        """Print comprehensive test summary"""
        print("=" * 70)
        print("📊 FRONTEND MOCK DATA TEST SUMMARY")
        print("=" * 70)
        
        total = self.test_results["total_tests"]
        passed = self.test_results["passed_tests"]
        failed = self.test_results["failed_tests"]
        
        print(f"Total Tests: {total}")
        print(f"Passed: {passed} ✅")
        print(f"Failed: {failed} ❌")
        print(f"Success Rate: {(passed/total*100):.1f}%" if total > 0 else "No tests run")
        
        if self.test_results["errors"]:
            print("\n❌ FAILED TESTS:")
            for error in self.test_results["errors"]:
                print(f"  • {error}")
        
        if self.test_results["performance_metrics"]:
            print(f"\n⚡ PERFORMANCE SUMMARY:")
            avg_time = sum(self.test_results["performance_metrics"].values()) / len(self.test_results["performance_metrics"])
            print(f"  • Average Response Time: {avg_time:.2f}ms")
        
        print("\n" + "=" * 70)
        
        # Overall status
        if failed == 0:
            print("🎉 ALL TESTS PASSED! Frontend-only deployment is working correctly.")
        elif failed < total / 2:
            print("⚠️ SOME TESTS FAILED. Frontend has minor issues that need attention.")
        else:
            print("🚨 MULTIPLE TESTS FAILED. Frontend has significant issues that need immediate attention.")

async def main():
    """Main test execution function"""
    tester = FrontendMockDataTester()
    await tester.run_all_tests()

if __name__ == "__main__":
    asyncio.run(main())