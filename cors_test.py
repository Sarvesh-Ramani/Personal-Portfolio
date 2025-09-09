#!/usr/bin/env python3
import asyncio
import aiohttp

async def test_cors():
    async with aiohttp.ClientSession() as session:
        # Test with Origin header
        headers = {
            'Origin': 'https://example.com',
            'Access-Control-Request-Method': 'GET'
        }
        
        async with session.get('https://java-developer.preview.emergentagent.com/api/', headers=headers) as response:
            print("Response Status:", response.status)
            print("Response Headers:")
            for name, value in response.headers.items():
                print(f"  {name}: {value}")
            
            # Check for CORS headers (case insensitive)
            cors_headers = {}
            for name, value in response.headers.items():
                if 'access-control' in name.lower():
                    cors_headers[name] = value
            
            if cors_headers:
                print("\nCORS Headers Found:")
                for name, value in cors_headers.items():
                    print(f"  {name}: {value}")
            else:
                print("\nNo CORS headers found")

if __name__ == "__main__":
    asyncio.run(test_cors())