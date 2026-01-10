function formatDate(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
import { Link } from "react-router-dom";
<button
  type="button"
  onClick={() => window.print()}
  style={{ padding:"10px 14px", border:"1px solid #ddd", borderRadius:8, margin:"12px 0" }}
>
  Print / Save PDF
</button>
import { initialFormData, STORAGE_KEY } from "../state/formState";
import Card from "../components/Card";
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
      {formData?.lastSaved && (
  <p style={{ fontSize: 14, color: "rgba(47,47,51,0.6)", marginTop: 6 }}>
    Last saved {formatDate(formData.lastSaved)}
  </p>
)}
      <p>Review what you captured. You can go back and edit anytime.</p>

      <Card
  title="People You Rely On"
  subtitle="Who would step in if you needed help?"
>
        <p><strong>Key holders:</strong> {formData?.people?.keyHolders || "Not answered yet"}</p>
        <p><strong>Help this week:</strong> {formData?.people?.helpThisWeek || "Not answered yet"}</p>
      </Card>

      <Card
  title="Responsibilities You Carry"
  subtitle="List what you currently handle so someone else isn’t left guessing."
>
        <p><strong>Monthly bills:</strong> {formData?.responsibilities?.monthlyBills || "Not answered yet"}</p>
        <p><strong>Subscriptions:</strong> {formData?.responsibilities?.subscriptions || "Not answered yet"}</p>
        <p><strong>Next 30 days:</strong> {formData?.responsibilities?.next30Days || "Not answered yet"}</p>
      </Card>

      <Card
  title="Where Important Information Lives"
  subtitle="Note where things are kept—not passwords or numbers, just locations and names."
>
        <p><strong>Password storage:</strong> {formData?.keyInfo?.passwordLocation || "Not answered yet"}</p>
        <p><strong>Accounts:</strong> {formData?.keyInfo?.accounts || "Not answered yet"}</p>
        <p><strong>Documents:</strong> {formData?.keyInfo?.documentsLocation || "Not answered yet"}</p>
      </Card>

      <Card
  title="One Thing You’ve Been Putting Off"
  subtitle="There’s usually one thing you’ve meant to write down. This is where it goes."
>
        <p><strong>Note:</strong> {formData?.gaps?.oneThingToWriteDown || "Not answered yet"}</p>
      </Card>

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
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
  <button
    type="button"
    onClick={() => window.print()}
    style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}
  >
    Print / Save PDF
  </button>

  <button
    type="button"
    onClick={() => {
      const ok = confirm("Clear all saved answers?");
      if (!ok) return;
      localStorage.clear();
      window.location.href = "/";
    }}
    style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}
  >
    Clear all
  </button>
</div>
    </main>
  );
}

