import React from 'react';
import { Lock, Shield, Eye, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-4 py-20">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8">
        <div className="text-center mb-10">
          <Lock size={64} className="mx-auto text-white mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last Updated: June 15, 2023</p>
        </div>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              1. Introduction
            </h2>
            <p className="mb-3">At MediVolt, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.</p>
            <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Database className="mr-2" size={24} />
              2. Information We Collect
            </h2>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Personal Data</h3>
                <p className="mb-2">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                  <li>Cookies and Usage Data</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Health Data</h3>
                <p className="mb-2">To provide our health-related services, we may collect health information that you provide, such as:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Medical history</li>
                  <li>Symptoms</li>
                  <li>Medical reports</li>
                  <li>Medication information</li>
                  <li>Fitness and activity data</li>
                </ul>
                <p>This information is used solely to provide you with our services and is handled with the utmost confidentiality.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                <p>We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="mr-2" size={24} />
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the collected data for various purposes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
              <li>To monitor the usage of our Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              4. Data Security
            </h2>
            <p className="mb-3">The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information, including:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>All sensitive information is encrypted using secure socket layer technology (SSL)</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular data backups and disaster recovery planning</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              5. Disclosure of Data
            </h2>
            <p className="mb-3">We may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of MediVolt</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              6. Your Data Protection Rights
            </h2>
            <p className="mb-3">You have certain data protection rights. MediVolt aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
            <p className="mb-3">If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>The right to access, update or to delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              7. Changes to This Privacy Policy
            </h2>
            <p className="mb-3">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="mr-2" size={24} />
              8. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p className="mt-2">
              <a href="mailto:privacy@medivolt.com" className="text-blue-300 hover:text-blue-100 underline">privacy@medivolt.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}