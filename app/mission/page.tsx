const Mission = () => {
  return (
    <main className="fade-in-up z-10 relative">
      <div className="max-w-[800px] mx-auto md:px-8 px-4 min-h-[60vh] border-l border-r border-slate-200 border-dashed">
        <div className="py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Our mission<span className="text-primary">.</span>
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl mb-6">
              At Fork, we believe that managing your workforce shouldn&apos;t be complicated. 
              Our mission is to simplify workforce management for businesses of all sizes.
            </p>
            
            <p className="text-lg mb-6">
              We understand that every business is unique, with its own challenges and requirements. 
              That&apos;s why we&apos;ve built a platform that&apos;s flexible, intuitive, and powerful enough to 
              handle everything from scheduling and time tracking to HR compliance and employee engagement.
            </p>
            
            <p className="text-lg mb-6">
              Our goal is to help you save time, reduce costs, and improve employee satisfaction 
              by providing you with the tools you need to manage your workforce effectively.
            </p>
            
            <div className="bg-muted p-6 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4">What we stand for</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Simplicity in complex workforce management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Empowering businesses to focus on what matters most</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Building tools that employees actually want to use</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Continuous innovation based on real user feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Mission