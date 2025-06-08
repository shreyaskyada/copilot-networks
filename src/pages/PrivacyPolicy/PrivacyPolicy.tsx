import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main-area py-20">
      <div className="container mx-auto space-y-6 px-4 text-left text-gray-800">
        <p>
          <strong className="text-lg">Privacy Policy</strong>
          <br />
          DBA Copilot Net LLC operates{" "}
          <a
            href="https://www.copilotnet.com"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.copilotnet.com
          </a>
          . This page informs you of our policies regarding the collection, use,
          and disclosure of Personal Information we receive from users of the
          Site.
        </p>

        <p>
          We take your privacy seriously and are committed to safeguarding your
          personal information. By using the Site, you agree to the collection
          and use of information in accordance with this policy.
        </p>

        <p>
          <strong>Information Collection and Use</strong>
          <br />
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information may include but is
          not limited to your name, email address, phone number, and company
          name ("Personal Information").
        </p>

        <p>
          <strong>Log Data</strong>
          <br />
          Like many site operators, we collect information that your browser
          sends whenever you visit our Site ("Log Data"). This Log Data may
          include information such as your computer’s Internet Protocol ("IP")
          address, browser type, browser version, the pages of our Site that you
          visit, the time and date of your visit, the time spent on those pages,
          and other statistics.
        </p>

        <p>
          <strong>Cookies and Similar Technologies</strong>
          <br />
          Our Site uses cookies and similar technologies to enhance your
          experience. Cookies are small files stored on your computer or device
          that enable the Site or service provider's systems to recognize your
          browser and capture and remember certain information. You can instruct
          your browser to refuse all cookies or to indicate when a cookie is
          being sent. However, if you do not accept cookies, you may not be able
          to use some portions of our Site.
        </p>

        <p>
          <strong>Third-Party Services</strong>
          <br />
          We may engage third-party companies and individuals to facilitate our
          Site, provide services on our behalf, perform Site-related services,
          or assist us in analyzing how our Site is used. These third parties
          may have access to your Personal Information only to perform specific
          tasks on our behalf and are obligated not to disclose or use it for
          any other purpose.
        </p>

        <p>
          <strong>Data Security</strong>
          <br />
          We take appropriate and reasonable security measures to protect your
          Personal Information from unauthorized access, alteration, disclosure,
          or destruction. However, please be aware that no method of
          transmission over the internet, or method of electronic storage, is
          100% secure, and we cannot guarantee its absolute security.
        </p>

        <p>
          <strong>Data Retention</strong>
          <br />
          We will retain your Personal Information only for as long as necessary
          to fulfill the purposes for which it was collected and to comply with
          legal obligations.
        </p>

        <p>
          <strong>Links to Other Sites</strong>
          <br />
          Our Site may contain links to other sites that are not operated by us.
          If you click on a third-party link, you will be directed to that third
          party's site. We strongly advise you to review the Privacy Policy of
          every site you visit. We have no control over and assume no
          responsibility for the content, privacy policies, or practices of any
          third-party sites or services.
        </p>

        <p>
          <strong>Changes to This Privacy Policy</strong>
          <br />
          We reserve the right to update or change our Privacy Policy at any
          time, and you should check this Privacy Policy periodically. Your
          continued use of the Site after we post any modifications to the
          Privacy Policy on this page will constitute your acknowledgment of the
          modifications and your consent to abide and be bound by the modified
          Privacy Policy.
        </p>

        <p>
          <strong>Contact Us</strong>
          <br />
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a
            href="mailto:sales@copilotnet.com"
            className="text-blue-600 underline"
          >
            sales@copilotnet.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
