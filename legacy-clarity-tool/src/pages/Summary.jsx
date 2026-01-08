import { Link } from "react-router-dom";

export default function Summary({ formData }) {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1>Legacy Clarity — Summary</h1>
      <p>Review what you captured. You can go back and edit anytime.</p>

      <section style={{ marginBottom: 24 }}>
        <h2>People You Rely On</h2>
        <p><strong>Key holders:</strong> {formData?.people?.keyHolders || "—"}</p>
        <p><strong>Help this week:</strong> {formData?.people?.helpThisWeek || "—"}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Responsibilities You Carry</h2>
        <p><strong>Monthly bills:</strong> {formData?.responsibilities?.monthlyBills || "—"}</p>
        <p><strong>Subscriptions:</strong> {formData?.responsibilities?.subscriptions || "—"}</p>
        <p><strong>Next 30 days:</strong> {formData?.responsibilities?.next30Days || "—"}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>Where Important Information Lives</h2>
        <p><strong>Password storage:</strong> {formData?.keyInfo?.passwordLocation || "—"}</p>
        <p><strong>Accounts:</strong> {formData?.keyInfo?.accounts || "—"}</p>
        <p><strong>Documents:</strong> {formData?.keyInfo?.documentsLocation || "—"}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2>One Thing You’ve Been Putting Off</h2>
        <p><strong>Note:</strong> {formData?.gaps?.oneThingToWriteDown || "—"}</p>
      </section>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/form">Back to Form</Link>
        <Link to="/">Home</Link>
      </div>
    </main>
  );
}
