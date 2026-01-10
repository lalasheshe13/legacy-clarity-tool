import { useState } from "react";
import Card from "../components/Card";

export default function Form({ formData, setFormData }) {
  const [stepIndex, setStepIndex] = useState(0);

  const stepTitle =
    stepIndex === 0
      ? "People You Rely On"
      : stepIndex === 1
      ? "Responsibilities You Carry"
      : stepIndex === 2
      ? "Where Important Information Lives"
      : "One Thing You’ve Been Putting Off";

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <header style={{ marginBottom: 32, textAlign: "center" }}>
        <h1 style={{ marginBottom: 6 }}>Legacy Clarity</h1>
        <p style={{ fontStyle: "italic" }}>
          A place to gather what matters. Take your time.
        </p>

        <div style={{ marginTop: 20 }}>
          <div
            style={{
              fontSize: 14,
              color: "rgba(47,47,51,0.6)",
              marginBottom: 8,
            }}
          >
            Snapshot {stepIndex + 1} of 4: {stepTitle}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: stepIndex === 0 ? "#7c9a92" : "#d1d5db",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: stepIndex === 1 ? "#7c9a92" : "#d1d5db",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: stepIndex === 2 ? "#7c9a92" : "#d1d5db",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: stepIndex === 3 ? "#7c9a92" : "#d1d5db",
              }}
            />
          </div>
        </div>
      </header>

      {stepIndex === 0 && (
        <Card
          title="People You Rely On"
          subtitle="Who would step in if you needed help?"
        >
          <label>Who currently has a key to your home?</label>
          <textarea
            placeholder="Example: My sister Carla (spare key), my neighbor James (emergency access)"
            value={formData.people.keyHolders}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                people: { ...prev.people, keyHolders: e.target.value },
              }))
            }
          />

          <label>If you needed help this week, who would you call first?</label>
          <textarea
            placeholder="Example: My cousin Maya (rides, decisions), my friend Chris (local backup)"
            value={formData.people.helpThisWeek}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                people: { ...prev.people, helpThisWeek: e.target.value },
              }))
            }
          />
        </Card>
      )}

      {stepIndex === 1 && (
        <Card
          title="Responsibilities You Carry"
          subtitle="The recurring tasks only you manage right now."
        >
          <label>What monthly bills or payments do you manage?</label>
          <textarea
            placeholder="Example: Rent, electricity, internet, car note, health insurance"
            value={formData.responsibilities.monthlyBills}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                responsibilities: {
                  ...prev.responsibilities,
                  monthlyBills: e.target.value,
                },
              }))
            }
          />

          <label>What subscriptions automatically renew on your cards?</label>
          <textarea
            placeholder="Example: Netflix, Spotify, iCloud, gym membership"
            value={formData.responsibilities.subscriptions}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                responsibilities: {
                  ...prev.responsibilities,
                  subscriptions: e.target.value,
                },
              }))
            }
          />

          <label>Who are you scheduled to meet or support in the next 30 days?</label>
          <textarea
            placeholder="Example: Appointments, client calls, tutoring sessions, caregiving visits"
            value={formData.responsibilities.next30Days}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                responsibilities: {
                  ...prev.responsibilities,
                  next30Days: e.target.value,
                },
              }))
            }
          />
        </Card>
      )}

      {stepIndex === 2 && (
        <Card
          title="Where Important Information Lives"
          subtitle="Not the details—just where to find them."
        >
          <label>Where do you store your passwords or password manager?</label>
          <textarea
            placeholder="Example: 1Password app, notebook in top desk drawer (no passwords needed)"
            value={formData.keyInfo.passwordLocation}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                keyInfo: { ...prev.keyInfo, passwordLocation: e.target.value },
              }))
            }
          />

          <label>What bank or investment accounts should someone be aware of?</label>
          <textarea
            placeholder="Example: Checking at ABC Bank, savings at XYZ Credit Union"
            value={formData.keyInfo.accounts}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                keyInfo: { ...prev.keyInfo, accounts: e.target.value },
              }))
            }
          />

          <label>Where do you keep important documents?</label>
          <textarea
            placeholder="Example: Fireproof safe, file box, Google Drive folder"
            value={formData.keyInfo.documentsLocation}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                keyInfo: {
                  ...prev.keyInfo,
                  documentsLocation: e.target.value,
                },
              }))
            }
          />
        </Card>
      )}

      {stepIndex === 3 && (
        <Card
          title="One Thing You’ve Been Putting Off"
          subtitle="The one note you’ve meant to capture."
        >
          <label>What’s one thing you keep meaning to write down, but haven’t yet?</label>
          <textarea
            placeholder="Example: Who should care for my dog, where my spare keys are"
            value={formData.gaps.oneThingToWriteDown}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                gaps: { ...prev.gaps, oneThingToWriteDown: e.target.value },
              }))
            }
          />
        </Card>
      )}

      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 32,
          justifyContent: "center",
        }}
      >
        {stepIndex > 0 ? (
          <button className="btn btn-ghost" onClick={() => setStepIndex(stepIndex - 1)}>
            ← Back
          </button>
        ) : (
          <button className="btn btn-ghost" onClick={() => (window.location.href = "/")}>
            ← Home
          </button>
        )}

        {stepIndex < 3 ? (
          <button className="btn btn-primary" onClick={() => setStepIndex(stepIndex + 1)}>
            Continue →
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                lastSaved: new Date().toISOString(),
              }));
              window.location.href = "/summary";
            }}
          >
            Save & View Summary →
          </button>
        )}
      </div>
    </main>
  );
}
