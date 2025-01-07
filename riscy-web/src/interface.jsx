import React from 'react';

const CompilerInterface = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-slate-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">RISC-V Compiler</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#developers" className="hover:text-gray-300">Developers</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">Source Code</h2>
            <textarea 
              className="w-full h-96 p-2 font-mono bg-gray-50 border rounded" 
              placeholder="Enter your code here..."
            />
          </div>
          
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">RISC-V Assembly</h2>
            <pre className="w-full h-96 p-2 font-mono bg-gray-50 border rounded overflow-auto">
              {`# Assembly output will appear here\n`}
            </pre>
          </div>
        </div>

        <section id="about" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">About the Project</h2>
          <p className="text-gray-700">
            This compiler project translates high-level code into RISC-V assembly instructions. 
            It provides a simple interface for developers to experiment with RISC-V architecture.
          </p>
        </section>

        <section id="developers" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Mamata Maharjan</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Kalpesh Manandhar</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Ishwor Basyal</h3>
            </div>
          </div>
        </section>

        <section id="Supervisor" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Supervisor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Bikal Adhikari</h3>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2024 Mamata Maharjan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CompilerInterface;