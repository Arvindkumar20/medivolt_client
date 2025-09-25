import React from 'react';
import { Cookie, Shield, Info } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8">
        <div className="text-center mb-10">
          <Cookie size={64} className="mx-auto text-white mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Cookie Policy</h1>
          <p className="text-lg opacity-90">Last Updated: June 15, 2023</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Info className="mr-2" size={24} />
              1. What Are Cookies
            </h2>
            <p className="mb-3">Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
            <p>Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your personal computer or mobile device when you go offline, while session cookies are deleted as soon as you close your web browser.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              2. How MediVolt Uses Cookies
            </h2>
            <p className="mb-3">When you use and access the Service, we may place a number of cookie files in your web browser.</p>
            <p className="mb-3">We use cookies for the following purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="font-semibold">Essential cookies:</span> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or use a shopping cart.
              </li>
              <li>
                <span className="font-semibold">Analytical/performance cookies:</span> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>
                <span className="font-semibold">Functionality cookies:</span> These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
              </li>
              <li>
                <span className="font-semibold">Targeting cookies:</span> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              3. Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Session Cookies</h3>
                <p>We use session cookies to operate our Service, including to authenticate you and maintain your session as you navigate through different pages on our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                <p>We use preference cookies to remember your preferences and various settings, such as language preferences, theme settings, and other customizable features of our Service.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Security Cookies</h3>
                <p>We use security cookies for security purposes, such as to detect and prevent unauthorized access or malicious activities.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p>We use analytics cookies to track information about how the Service is used so that we can make improvements. We may also use analytics cookies to test new advertisements, pages, features or new functionality of the Service to see how our users react to them.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              4. Third-Party Cookies
            </h2>
            <p className="mb-3">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>
            <p>These third-party services may include:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Google Analytics</li>
              <li>Facebook Pixel</li>
              <li>Hotjar</li>
              <li>Other analytics and advertising services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              5. What Are Your Choices Regarding Cookies
            </h2>
            <p className="mb-3">If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
            <p className="mb-3">Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
            <p>You can learn more about cookies and the following third-party websites:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>AllAboutCookies: <a href="http://www.allaboutcookies.org/" className="text-blue-300 hover:text-blue-100 underline">http://www.allaboutcookies.org/</a></li>
              <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/" className="text-blue-300 hover:text-blue-100 underline">http://www.networkadvertising.org/</a></li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              6. Changes to This Cookie Policy
            </h2>
            <p className="mb-3">We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date at the top of this Cookie Policy.</p>
            <p>You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              7. Contact Us
            </h2>
            <p>If you have any questions about our Cookie Policy, please contact us:</p>
            <p className="mt-2">
              <a href="mailto:privacy@medivolt.com" className="text-blue-300 hover:text-blue-100 underline">privacy@medivolt.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}