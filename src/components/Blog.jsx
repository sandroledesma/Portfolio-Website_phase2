import React from 'react';

function Blog() {
    return (
        <div className="p-8 px-12 pt-18 dark:bg-blue-900 min-h-screen">
            <div className="max-w-3xl mx-auto bg-gray-300 p-8 rounded-lg shadow-lg border border-white">
                <h1 className="text-3xl font-bold text-white mb-6">
                    Revolutionizing Customer Support: Building a Smart Ticketing System with AI Integration
                </h1>
                <p className="text-gray-700 mb-4">
                    In today's fast-paced world, customer service is more important than ever. However, with the growing number of 
                    customer inquiries and the increasing complexity of issues, traditional customer support systems are struggling 
                    to keep up. That's where artificial intelligence (AI) comes in. AI is revolutionizing the way we handle customer 
                    support, making it faster, more efficient, and more personalized.
                </p>
                <p className="text-gray-700 mb-4">
                    Building a smart ticketing system with AI integration helps streamline customer service operations by ensuring 
                    accurate ticket resolution and faster response times. With AI, companies can automatically categorize tickets, 
                    assign them to the right teams, and even suggest responses to common issues.
                </p>
                <p className="text-gray-700 mb-4">
                    Read the full blog post on Medium for more insights and detailed steps on how to integrate AI into customer service systems.
                </p>
                <div className="flex justify-center">
                    <a 
                        href="https://medium.com/@sandroledesma/revolutionizing-customer-support-building-a-smart-ticketing-system-with-ai-integration-4224c6a270e2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-md transition-colors duration-300"
                    >
                        Read Full Post on Medium
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Blog;