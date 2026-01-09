import { Link } from "react-router-dom";
<button
  type="button"
  onClick={() => window.print()}
  style={{ padding:"10px 14px", border:"1px solid #ddd", borderRadius:8, margin:"12px 0" }}
>
  Print / Save PDF
</button>
import { initialFormData, STORAGE_KEY } from "../state/formState";
export default function Summary({ formData, setFormData }) {
    const missing = [];

  if (!formData?.people?.helpThisWeek) missing.push("Add a ‘help this week’ contact.");
  if (!formData?.people?.keyHolders) missing.push("List who has a key to your home.");
  if (!formData?.keyInfo?.passwordLocation) missing.push("Note where your password manager/list is stored.");
  if (!formData?.keyInfo?.documentsLocation) missing.push("Note where important documents are kept.");
  if (!formData?.gaps?.oneThingToWriteDown) missing.push("Capture one thing you’ve been meaning to write down.");
<p>Review what you captured. You can go back and edit anytime.</p>

      {missing.length > 0 && (
        <section style={{ margin: "20px 0", padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
          <h2 style={{ marginTop: 0 }}>What’s missing (optional)</h2>
          <ul>
            {missing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

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
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
  <Link to="/summary" style={{ padding:"10px 14px", border:"1px solid #ddd", borderRadius:8 }}>
    Save & View Summary
  </Link>
  <Link to="/" style={{ padding:"10px 14px", border:"1px solid #ddd", borderRadius:8 }}>
    Back
  </Link>
</div>
      </div>
    </main>
  );
}
<button
  type="button"
  onClick={() => {
    const ok = confirm("Clear all saved answers?");
    if (!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    setFormData(initialFormData);
  }}
  style={{ padding:"10px 14px", border:"1px solid #ddd", borderRadius:8, marginLeft: 8 }}
>
  Clear all
</button>
