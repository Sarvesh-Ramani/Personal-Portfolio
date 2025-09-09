#!/usr/bin/env python3
"""
Comprehensive Backend API Testing Suite for Portfolio Application
Tests all API endpoints, database integration, error handling, and performance
"""

import asyncio
import aiohttp
import time
import json
import os
from typing import Dict, List, Any
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://java-developer.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.session = None
        self.test_results = {
            "total_tests": 0,
            "passed_tests": 0,
            "failed_tests": 0,
            "errors": [],
            "performance_metrics": {},
            "endpoint_results": {}
        }
    
    async def setup(self):
        """Initialize HTTP session"""
        self.session = aiohttp.ClientSession()
    
    async def teardown(self):
        """Close HTTP session"""
        if self.session:
            await self.session.close()
    
    async def make_request(self, method: str, endpoint: str, data: Dict = None) -> Dict:
        """Make HTTP request and measure response time"""
        start_time = time.time()
        
        try:
            url = f"{BACKEND_URL}{endpoint}"
            
            if method.upper() == "GET":
                async with self.session.get(url) as response:
                    response_data = await response.json()
                    status_code = response.status
            elif method.upper() == "POST":
                async with self.session.post(url, json=data) as response:
                    response_data = await response.json()
                    status_code = response.status
            elif method.upper() == "PUT":
                async with self.session.put(url, json=data) as response:
                    response_data = await response.json()
                    status_code = response.status
            elif method.upper() == "DELETE":
                async with self.session.delete(url) as response:
                    if response.status == 200:
                        response_data = await response.json()
                    else:
                        response_data = {"message": "Deleted"}
                    status_code = response.status
            
            response_time = (time.time() - start_time) * 1000  # Convert to milliseconds
            
            return {
                "status_code": status_code,
                "data": response_data,
                "response_time": response_time,
                "success": True
            }
            
        except Exception as e:
            response_time = (time.time() - start_time) * 1000
            return {
                "status_code": 0,
                "data": None,
                "response_time": response_time,
                "success": False,
                "error": str(e)
            }
    
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
    
    async def test_root_endpoint(self):
        """Test the root API endpoint"""
        print("🔍 Testing Root Endpoint...")
        
        result = await self.make_request("GET", "/")
        
        if result["success"] and result["status_code"] == 200:
            expected_message = "Portfolio API is running!"
            if result["data"].get("message") == expected_message:
                self.log_test_result(
                    "Root Endpoint", 
                    True, 
                    f"API is running correctly", 
                    result["response_time"]
                )
            else:
                self.log_test_result(
                    "Root Endpoint", 
                    False, 
                    f"Unexpected message: {result['data']}"
                )
        else:
            self.log_test_result(
                "Root Endpoint", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_personal_info_endpoints(self):
        """Test personal information endpoints"""
        print("👤 Testing Personal Information Endpoints...")
        
        # Test GET personal info
        result = await self.make_request("GET", "/personal-info")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            required_fields = ["name", "title", "email", "phone", "linkedin", "location", "summary", "tagline"]
            
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                self.log_test_result(
                    "GET Personal Info", 
                    True, 
                    f"Retrieved personal info for {data.get('name', 'Unknown')}", 
                    result["response_time"]
                )
                
                # Store data for potential update test
                self.test_results["endpoint_results"]["personal_info"] = data
                
            else:
                self.log_test_result(
                    "GET Personal Info", 
                    False, 
                    f"Missing required fields: {missing_fields}"
                )
        else:
            self.log_test_result(
                "GET Personal Info", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_experience_endpoints(self):
        """Test experience endpoints"""
        print("💼 Testing Experience Endpoints...")
        
        # Test GET all experience
        result = await self.make_request("GET", "/experience")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check first experience record structure
                    exp = data[0]
                    required_fields = ["company", "role", "period", "location", "type", "description", "achievements", "technologies"]
                    missing_fields = [field for field in required_fields if field not in exp]
                    
                    if not missing_fields:
                        self.log_test_result(
                            "GET Experience", 
                            True, 
                            f"Retrieved {len(data)} experience record(s)", 
                            result["response_time"]
                        )
                        
                        # Store data for potential tests
                        self.test_results["endpoint_results"]["experience"] = data
                        
                    else:
                        self.log_test_result(
                            "GET Experience", 
                            False, 
                            f"Missing required fields in experience: {missing_fields}"
                        )
                else:
                    self.log_test_result(
                        "GET Experience", 
                        True, 
                        "No experience records found (empty array)", 
                        result["response_time"]
                    )
            else:
                self.log_test_result(
                    "GET Experience", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET Experience", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_projects_endpoints(self):
        """Test projects endpoints"""
        print("🚀 Testing Projects Endpoints...")
        
        # Test GET all projects
        result = await self.make_request("GET", "/projects")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                self.log_test_result(
                    "GET All Projects", 
                    True, 
                    f"Retrieved {len(data)} project(s)", 
                    result["response_time"]
                )
                
                # Store data for featured projects test
                self.test_results["endpoint_results"]["projects"] = data
                
            else:
                self.log_test_result(
                    "GET All Projects", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET All Projects", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
        
        # Test GET featured projects
        result = await self.make_request("GET", "/projects/featured")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                # Verify all returned projects are featured
                all_featured = all(project.get("isFeatured", False) for project in data)
                
                if all_featured or len(data) == 0:
                    self.log_test_result(
                        "GET Featured Projects", 
                        True, 
                        f"Retrieved {len(data)} featured project(s)", 
                        result["response_time"]
                    )
                else:
                    non_featured = [p.get("title", "Unknown") for p in data if not p.get("isFeatured", False)]
                    self.log_test_result(
                        "GET Featured Projects", 
                        False, 
                        f"Non-featured projects returned: {non_featured}"
                    )
            else:
                self.log_test_result(
                    "GET Featured Projects", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET Featured Projects", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_skills_endpoints(self):
        """Test skills endpoints"""
        print("🛠️ Testing Skills Endpoints...")
        
        # Test GET all skills
        result = await self.make_request("GET", "/skills")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check skill structure
                    skill = data[0]
                    required_fields = ["category", "name", "level", "description"]
                    missing_fields = [field for field in required_fields if field not in skill]
                    
                    if not missing_fields:
                        # Verify skill levels are within valid range (0-100)
                        invalid_levels = [s for s in data if not (0 <= s.get("level", -1) <= 100)]
                        
                        if not invalid_levels:
                            # Group by category for better analysis
                            categories = {}
                            for skill in data:
                                cat = skill.get("category", "Unknown")
                                if cat not in categories:
                                    categories[cat] = 0
                                categories[cat] += 1
                            
                            self.log_test_result(
                                "GET Skills", 
                                True, 
                                f"Retrieved {len(data)} skills across {len(categories)} categories", 
                                result["response_time"]
                            )
                            
                            # Store data
                            self.test_results["endpoint_results"]["skills"] = data
                            
                        else:
                            self.log_test_result(
                                "GET Skills", 
                                False, 
                                f"Invalid skill levels found: {[s.get('name') for s in invalid_levels]}"
                            )
                    else:
                        self.log_test_result(
                            "GET Skills", 
                            False, 
                            f"Missing required fields in skills: {missing_fields}"
                        )
                else:
                    self.log_test_result(
                        "GET Skills", 
                        True, 
                        "No skills found (empty array)", 
                        result["response_time"]
                    )
            else:
                self.log_test_result(
                    "GET Skills", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET Skills", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_education_endpoints(self):
        """Test education endpoints"""
        print("🎓 Testing Education Endpoints...")
        
        # Test GET all education
        result = await self.make_request("GET", "/education")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check education structure
                    edu = data[0]
                    required_fields = ["degree", "institution", "period", "location", "description"]
                    missing_fields = [field for field in required_fields if field not in edu]
                    
                    if not missing_fields:
                        self.log_test_result(
                            "GET Education", 
                            True, 
                            f"Retrieved {len(data)} education record(s)", 
                            result["response_time"]
                        )
                        
                        # Store data
                        self.test_results["endpoint_results"]["education"] = data
                        
                    else:
                        self.log_test_result(
                            "GET Education", 
                            False, 
                            f"Missing required fields in education: {missing_fields}"
                        )
                else:
                    self.log_test_result(
                        "GET Education", 
                        True, 
                        "No education records found (empty array)", 
                        result["response_time"]
                    )
            else:
                self.log_test_result(
                    "GET Education", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET Education", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_achievements_endpoints(self):
        """Test achievements endpoints"""
        print("🏆 Testing Achievements Endpoints...")
        
        # Test GET all achievements
        result = await self.make_request("GET", "/achievements")
        
        if result["success"] and result["status_code"] == 200:
            data = result["data"]
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check achievement structure
                    achievement = data[0]
                    required_fields = ["title", "description", "year", "category"]
                    missing_fields = [field for field in required_fields if field not in achievement]
                    
                    if not missing_fields:
                        self.log_test_result(
                            "GET Achievements", 
                            True, 
                            f"Retrieved {len(data)} achievement(s)", 
                            result["response_time"]
                        )
                        
                        # Store data
                        self.test_results["endpoint_results"]["achievements"] = data
                        
                    else:
                        self.log_test_result(
                            "GET Achievements", 
                            False, 
                            f"Missing required fields in achievements: {missing_fields}"
                        )
                else:
                    self.log_test_result(
                        "GET Achievements", 
                        True, 
                        "No achievements found (empty array)", 
                        result["response_time"]
                    )
            else:
                self.log_test_result(
                    "GET Achievements", 
                    False, 
                    f"Expected array, got: {type(data)}"
                )
        else:
            self.log_test_result(
                "GET Achievements", 
                False, 
                f"Status: {result['status_code']}, Error: {result.get('error', 'Unknown')}"
            )
    
    async def test_error_handling(self):
        """Test API error handling"""
        print("⚠️ Testing Error Handling...")
        
        # Test invalid endpoint
        result = await self.make_request("GET", "/invalid-endpoint")
        
        if result["status_code"] == 404:
            self.log_test_result(
                "Invalid Endpoint Error", 
                True, 
                "Correctly returns 404 for invalid endpoint", 
                result["response_time"]
            )
        else:
            self.log_test_result(
                "Invalid Endpoint Error", 
                False, 
                f"Expected 404, got {result['status_code']}"
            )
    
    async def test_cors_headers(self):
        """Test CORS configuration"""
        print("🌐 Testing CORS Configuration...")
        
        try:
            # Make a request and check for CORS headers
            async with self.session.get(f"{BACKEND_URL}/") as response:
                headers = response.headers
                
                # Check for CORS headers
                cors_headers_present = (
                    'access-control-allow-origin' in headers or
                    'Access-Control-Allow-Origin' in headers
                )
                
                if cors_headers_present:
                    self.log_test_result(
                        "CORS Headers", 
                        True, 
                        "CORS headers are properly configured"
                    )
                else:
                    self.log_test_result(
                        "CORS Headers", 
                        False, 
                        "CORS headers not found in response"
                    )
                    
        except Exception as e:
            self.log_test_result(
                "CORS Headers", 
                False, 
                f"Error checking CORS: {str(e)}"
            )
    
    async def test_performance_metrics(self):
        """Analyze performance metrics"""
        print("⚡ Analyzing Performance Metrics...")
        
        if self.test_results["performance_metrics"]:
            avg_response_time = sum(self.test_results["performance_metrics"].values()) / len(self.test_results["performance_metrics"])
            max_response_time = max(self.test_results["performance_metrics"].values())
            min_response_time = min(self.test_results["performance_metrics"].values())
            
            # Performance thresholds
            acceptable_avg = 500  # 500ms average
            acceptable_max = 1000  # 1000ms max
            
            performance_good = avg_response_time <= acceptable_avg and max_response_time <= acceptable_max
            
            details = f"Avg: {avg_response_time:.2f}ms, Max: {max_response_time:.2f}ms, Min: {min_response_time:.2f}ms"
            
            self.log_test_result(
                "Performance Analysis", 
                performance_good, 
                details
            )
            
            # Log slow endpoints
            slow_endpoints = {k: v for k, v in self.test_results["performance_metrics"].items() if v > acceptable_avg}
            if slow_endpoints:
                print(f"    ⚠️ Slow endpoints (>{acceptable_avg}ms): {slow_endpoints}")
        else:
            self.log_test_result(
                "Performance Analysis", 
                False, 
                "No performance metrics collected"
            )
    
    async def run_all_tests(self):
        """Run all test suites"""
        print("🧪 Starting Portfolio Backend API Tests")
        print("=" * 60)
        
        await self.setup()
        
        try:
            # Core API endpoint tests
            await self.test_root_endpoint()
            await self.test_personal_info_endpoints()
            await self.test_experience_endpoints()
            await self.test_projects_endpoints()
            await self.test_skills_endpoints()
            await self.test_education_endpoints()
            await self.test_achievements_endpoints()
            
            # Additional tests
            await self.test_error_handling()
            await self.test_cors_headers()
            await self.test_performance_metrics()
            
        finally:
            await self.teardown()
        
        # Print final summary
        self.print_summary()
    
    def print_summary(self):
        """Print comprehensive test summary"""
        print("=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
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
            print(f"  • Fastest Endpoint: {min(self.test_results['performance_metrics'], key=self.test_results['performance_metrics'].get)} ({min(self.test_results['performance_metrics'].values()):.2f}ms)")
            print(f"  • Slowest Endpoint: {max(self.test_results['performance_metrics'], key=self.test_results['performance_metrics'].get)} ({max(self.test_results['performance_metrics'].values()):.2f}ms)")
        
        # Data summary
        print(f"\n📋 DATA SUMMARY:")
        for endpoint, data in self.test_results["endpoint_results"].items():
            if isinstance(data, list):
                print(f"  • {endpoint.title()}: {len(data)} records")
            elif isinstance(data, dict):
                print(f"  • {endpoint.title()}: 1 record")
        
        print("\n" + "=" * 60)
        
        # Overall status
        if failed == 0:
            print("🎉 ALL TESTS PASSED! Backend API is working correctly.")
        elif failed < total / 2:
            print("⚠️ SOME TESTS FAILED. Backend has minor issues that need attention.")
        else:
            print("🚨 MULTIPLE TESTS FAILED. Backend has significant issues that need immediate attention.")

async def main():
    """Main test execution function"""
    tester = PortfolioAPITester()
    await tester.run_all_tests()

if __name__ == "__main__":
    asyncio.run(main())