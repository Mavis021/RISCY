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
  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
  <p className="text-gray-700 mb-4">
    A compiler is a program that converts high-level programming language (source code) into machine code. It thus is a tool that translates programming language statements (which are close to human language) into machine codes for execution of the statements. The output is often tailored for a particular processor or machine and is called the target machine.
  </p>

  <h2 className="text-2xl font-bold mb-4">Background</h2>
  <p className="text-gray-700 mb-6">
    The compilation process has a long history with its early roots spanning out to the 1940s. However, the foundations for modern compilers were laid by the development of the compiler for the A-0 programming language in 1952.
  </p>

  <h3 className="text-xl font-semibold mb-3">Notable Features of RISC-V ISA</h3>
  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
    <li>
      <span className="font-semibold">Open Source:</span> RISC-V ISA is open source, so has no issues with licensing fees. This is helpful for research and learning purposes.
    </li>
    <li>
      <span className="font-semibold">Modularity:</span> It is designed to be modular, comprising a small base integer instruction set and multiple optional extensions.
    </li>
    <li>
      <span className="font-semibold">Simplicity:</span> It follows the RISC principles of simplicity and efficiency.
    </li>
    <li>
      <span className="font-semibold">Universal ISA:</span> RISC-V has the potential to be the "universal" ISA as it is freely accessible to everyone.
    </li>
  </ul>

  <h3 className="text-xl font-semibold mb-3">Compiler Design Process</h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-700">
    <li>Scanning/tokenizing to generate a series of tokens from the source file</li>
    <li>Parsing the series of tokens to create an abstract syntax tree (AST)</li>
    <li>Semantic routines to extract meaning from the AST</li>
    <li>General optimization of the IR</li>
    <li>Assembly code generation depending on the target architecture</li>
  </ul>

  <h2 className="text-2xl font-bold mb-4 mt-8">Project Goals</h2>
  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
    <li>Developing a cross-compiler that can compile code for lightweight RISC-V systems.</li>
    <li>An educational tool to easily understand a compiler's workings.</li>
  </ul>

  <h2 className="text-2xl font-bold mb-4">Objectives</h2>
  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
    <li>To develop a C-lexer that groups C source code into lexemes/tokens.</li>
    <li>To develop a C-parser that performs rudimentary syntax checks and generates a parse tree.</li>
    <li>To generate machine dependent Assembly code (RISC-V ISA)</li>
  </ul>

  <h2 className="text-2xl font-bold mb-4">Scope</h2>
  <p className="text-gray-700">
    This project is intended to serve as an independent research on compiler design and RISC-V architecture. 
    As a result, it will most likely implement the core compilation features incorporating a subset of C-language. 
    However, this compiler is intended to be complete with the features intended to be incorporated. 
    It will focus on generating assembly code tailored for RISC-V ISA.
  </p>
  <p className="text-gray-700 mt-4">
    The decision to exclude the full support for the entire C-language was reached after a thorough discussion 
    with the project members and project supervisor-however, it will include a manageable and practical subset 
    of the C-language.
  </p>
</section>


        <section id="project-status" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Project Status & TODOs</h2>
          
          <h3 className="text-xl font-semibold mb-3">Specific Refactors</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Change arena to be dynamic in OS memory allocations instead of a fixed size table
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Consider using a list implementation</li>
              </ul>
            </li>
            <li>Restructure code to accommodate optimization pass</li>
            <li>Evaluate optimization pass placement in pipeline and IR impact</li>
            <li>✓ Implement arena to reduce memory leaks and simplify allocs/frees</li>
            <li>✓ Improve type checking function implementation</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Tokenizer</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Character literal tokenization</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Parser</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Explicit type casts</li>
            <li>Unions</li>
            <li>Typedefs</li>
            <li>Externs/Statics/Volatiles</li>
            <li>Array/Struct initialization</li>
            <li>Change declaration initializers to be an assignment</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Completed Features</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>✓ Function parameters in symbols table</li>
            <li>✓ Function parsing only in global scope</li>
            <li>✓ Assignment operators (+=, -=) and binary expressions</li>
            <li>✓ Control flow statements (break/continue/return)</li>
            <li>✓ Arrays (indexing and declarations)</li>
            <li>✓ Type checking</li>
            <li>✓ Struct declarations</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">IR / Middle-end</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Convert C datatypes to simpler form (tag + size like u32, i64) for simple conversions
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Code generator will work with these exclusively</li>
              </ul>
            </li>
            <li>Transform defined structs and complex data types into lower level IR
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Eliminate need for Statement block info in code generation</li>
              </ul>
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Code Generator</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Full support for register allocation</li>
            <li>Call return primitives implementation</li>
            <li>Comprehensive function call support</li>
          </ul>
        </section>


        <section id="developers" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Development Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Mamata Maharjan</h3>
              <p>077BCT043</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Kalpesh Manandhar</h3>
              <p>077BCT034</p>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Ishwor Basyal</h3>
              <p>077BCT031</p>
            </div>
          </div>
        </section>

        <section id="Supervisor" className="bg-white rounded shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Supervisor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded">
              <h3 className="font-semibold">Bikal Adhikari</h3>
              <p>Assistant Professor, IOE Pulchowk Campus</p>
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