#!/usr/bin/env python3
"""
Database Integration and Data Integrity Tests
"""

import asyncio
import aiohttp
import json

BACKEND_URL = "https://java-developer.preview.emergentagent.com/api"

async def test_data_integrity():
    """Test data integrity and relationships"""
    print("🔍 Testing Data Integrity and Relationships...")
    
    async with aiohttp.ClientSession() as session:
        
        # Test 1: Verify personal info has all required fields
        async with session.get(f"{BACKEND_URL}/personal-info") as response:
            personal_info = await response.json()
            
            required_fields = ["name", "title", "email", "phone", "linkedin", "location", "summary", "tagline"]
            missing_fields = [field for field in required_fields if not personal_info.get(field)]
            
            if not missing_fields:
                print("✅ Personal Info: All required fields present")
            else:
                print(f"❌ Personal Info: Missing fields: {missing_fields}")
        
        # Test 2: Verify projects have proper structure and featured projects exist
        async with session.get(f"{BACKEND_URL}/projects") as response:
            all_projects = await response.json()
        
        async with session.get(f"{BACKEND_URL}/projects/featured") as response:
            featured_projects = await response.json()
        
        featured_count = len([p for p in all_projects if p.get("isFeatured", False)])
        
        if len(featured_projects) == featured_count:
            print(f"✅ Projects: Featured projects consistency verified ({featured_count} featured)")
        else:
            print(f"❌ Projects: Featured projects mismatch - API returned {len(featured_projects)}, expected {featured_count}")
        
        # Test 3: Verify skills have valid levels (0-100)
        async with session.get(f"{BACKEND_URL}/skills") as response:
            skills = await response.json()
        
        invalid_skills = [s for s in skills if not (0 <= s.get("level", -1) <= 100)]
        
        if not invalid_skills:
            print(f"✅ Skills: All {len(skills)} skills have valid levels (0-100)")
        else:
            print(f"❌ Skills: {len(invalid_skills)} skills have invalid levels")
        
        # Test 4: Verify experience has proper structure
        async with session.get(f"{BACKEND_URL}/experience") as response:
            experience = await response.json()
        
        if experience and len(experience) > 0:
            exp = experience[0]
            required_exp_fields = ["company", "role", "period", "achievements", "technologies"]
            missing_exp_fields = [field for field in required_exp_fields if field not in exp]
            
            if not missing_exp_fields:
                print(f"✅ Experience: Proper structure verified")
            else:
                print(f"❌ Experience: Missing fields: {missing_exp_fields}")
        
        # Test 5: Check if all endpoints return consistent timestamps
        endpoints_with_timestamps = ["/personal-info", "/experience", "/projects", "/skills", "/education", "/achievements"]
        timestamp_issues = []
        
        for endpoint in endpoints_with_timestamps:
            async with session.get(f"{BACKEND_URL}{endpoint}") as response:
                data = await response.json()
                
                if isinstance(data, list):
                    for item in data:
                        if "createdAt" not in item or "updatedAt" not in item:
                            timestamp_issues.append(f"{endpoint}: Missing timestamps")
                            break
                elif isinstance(data, dict):
                    if "createdAt" not in data or "updatedAt" not in data:
                        timestamp_issues.append(f"{endpoint}: Missing timestamps")
        
        if not timestamp_issues:
            print("✅ Timestamps: All records have proper createdAt/updatedAt fields")
        else:
            print(f"❌ Timestamps: Issues found: {timestamp_issues}")

async def test_concurrent_requests():
    """Test concurrent request handling"""
    print("\n⚡ Testing Concurrent Request Handling...")
    
    async def make_request(session, endpoint):
        async with session.get(f"{BACKEND_URL}{endpoint}") as response:
            return response.status == 200
    
    async with aiohttp.ClientSession() as session:
        # Make 10 concurrent requests to different endpoints
        tasks = []
        endpoints = ["/", "/personal-info", "/experience", "/projects", "/skills", "/education", "/achievements", "/projects/featured"]
        
        for i in range(10):
            endpoint = endpoints[i % len(endpoints)]
            tasks.append(make_request(session, endpoint))
        
        results = await asyncio.gather(*tasks)
        successful_requests = sum(results)
        
        if successful_requests == len(tasks):
            print(f"✅ Concurrent Requests: All {len(tasks)} concurrent requests successful")
        else:
            print(f"❌ Concurrent Requests: {successful_requests}/{len(tasks)} requests successful")

async def test_response_consistency():
    """Test response consistency across multiple calls"""
    print("\n🔄 Testing Response Consistency...")
    
    async with aiohttp.ClientSession() as session:
        # Make multiple calls to the same endpoint and verify consistency
        responses = []
        
        for i in range(3):
            async with session.get(f"{BACKEND_URL}/personal-info") as response:
                data = await response.json()
                responses.append(data)
        
        # Check if all responses are identical
        first_response = responses[0]
        all_identical = all(resp == first_response for resp in responses)
        
        if all_identical:
            print("✅ Response Consistency: Multiple calls return identical data")
        else:
            print("❌ Response Consistency: Responses differ between calls")

async def main():
    """Run all database and integrity tests"""
    print("🧪 Starting Database Integration and Data Integrity Tests")
    print("=" * 70)
    
    await test_data_integrity()
    await test_concurrent_requests()
    await test_response_consistency()
    
    print("\n" + "=" * 70)
    print("✅ Database Integration Tests Completed")

if __name__ == "__main__":
    asyncio.run(main())