import { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="main-area py-20">
      <div className="container mx-auto px-4 text-left text-gray-800">
        <h2 className="mb-4 text-xl font-bold">Terms and Conditions</h2>

        <p className="mb-4">
          <strong>1. Introduction</strong>
          <br />
          <strong>1.1</strong> These terms and conditions govern your use of the
          copilotnet.com; by using our website, you accept these terms and
          conditions in full. If you disagree with these terms and conditions or
          any part of these terms and conditions, you must not use our website.
        </p>

        <p className="mb-4">
          <strong>1.2</strong> By using our website and agreeing to these terms
          and conditions, you represent that you are at least 18 years of age or
          the legal age of majority in your jurisdiction.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold">
          2. License to Use Website
        </h3>
        <p className="mb-4">
          <strong>2.1</strong> Unless otherwise stated, we or our licensors own
          the intellectual property rights in the website and material on the
          website. Subject to the license below, all these intellectual property
          rights are reserved.
        </p>

        <p className="mb-4">
          <strong>2.2</strong> You may view, download for caching purposes only,
          and print pages from the website for your own personal use, subject to
          the restrictions set out below and elsewhere in these terms and
          conditions.
        </p>

        <p className="mb-4">
          <strong>2.3</strong> You must not:
          <ul className="mt-2 ml-4 list-inside list-disc">
            <li>
              Republish material from this website (including republication on
              another website);
            </li>
            <li>Sell, rent, or sub-license material from the website;</li>
            <li>Show any material from the website in public;</li>
            <li>
              Reproduce, duplicate, copy, or otherwise exploit material on our
              website for a commercial purpose;
            </li>
            <li>Edit or otherwise modify any material on the website;</li>
            <li>
              Redistribute material from this website except for content
              specifically and expressly made available for redistribution.
            </li>
          </ul>
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold">3. Acceptable Use</h3>
        <p className="mb-4">
          <strong>3.1</strong> You must not use our website in any way that
          causes, or may cause, damage to the website or impairment of the
          availability or accessibility of the website; or in any way which is
          unlawful, illegal, fraudulent, or harmful, or in connection with any
          unlawful, illegal, fraudulent, or harmful purpose or activity.
        </p>

        <p className="mb-4">
          <strong>3.2</strong> You must not use our website to copy, store,
          host, transmit, send, use, publish, or distribute any material that
          consists of (or is linked to) any spyware, computer virus, Trojan
          horse, worm, keystroke logger, rootkit, or other malicious computer
          software.
        </p>

        <p className="mb-4">
          <strong>3.3</strong> You must not conduct any systematic or automated
          data collection activities (including without limitation scraping,
          data mining, data extraction, and data harvesting) on or in relation
          to our website without our express written consent.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold">
          4. Limitations of Liability
        </h3>
        <p className="mb-4">
          <strong>4.1</strong> We will not be liable to you (whether under the
          law of contract, the law of torts, or otherwise) in relation to the
          contents of, or use of, or otherwise in connection with, this website:
        </p>
        <ul className="mb-4 ml-4 list-inside list-disc">
          <li>
            To the extent that the website is provided free-of-charge, for any
            direct loss;
          </li>
          <li>For any indirect, special, or consequential loss;</li>
          <li>
            For any business losses, loss of revenue, income, profits, or
            anticipated savings, loss of contracts or business relationships,
            loss of reputation or goodwill, or loss or corruption of information
            or data.
          </li>
        </ul>

        <p className="mb-4">
          <strong>4.2</strong> These limitations of liability apply even if we
          have been expressly advised of the potential loss.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold">5. Indemnity</h3>
        <p className="mb-4">
          <strong>5.1</strong> You hereby indemnify us and undertake to keep us
          indemnified against any losses, damages, costs, liabilities, and
          expenses (including without limitation legal expenses and any amounts
          paid by us to a third party in settlement of a claim or dispute on the
          advice of our legal advisers) incurred or suffered by us arising out
          of any breach by you of any provision of these terms and conditions,
          or arising out of any claim that you have breached any provision of
          these terms and conditions.
        </p>

        <h3 className="mt-6 mb-2 text-xl font-bold">
          6. Breaches of These Terms and Conditions
        </h3>
        <p className="mb-4">
          <strong>6.1</strong> Without prejudice to our other rights under these
          terms and conditions, if you breach these terms and conditions in any
          way, we may take such action as we deem appropriate to deal with the
          breach.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
