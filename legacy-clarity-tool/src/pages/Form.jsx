import { Link } from "react-router-dom";

export default function Form({ formData, setFormData }) {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <header style={{ marginBottom: 24 }}>
        <h1>Legacy Clarity</h1>
        <p>Capture what matters most—so someone else isn’t left guessing.</p>
      </header>

      <section style={{ marginBottom: 28 }}>
        <h2>People You Rely On</h2>
        <p>Capture the people who already have access to your world or would show up first.</p>

        <label>Who currently has a key to your home?</label>
        <textarea
  style={{ width: "100%", minHeight: 70 }}
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
  style={{ width: "100%", minHeight: 70 }}
  placeholder="Example: My cousin Maya (rides, decisions), my friend Chris (local backup)"
  value={formData.people.helpThisWeek}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      people: { ...prev.people, helpThisWeek: e.target.value },
    }))
  }
/>

      </section>

      <section style={{ marginBottom: 28 }}>
        <h2>Responsibilities You Carry</h2>
        <p>List what you currently handle so someone else isn’t left guessing.</p>

        <label>What monthly bills or payments do you manage?</label>
        <textarea
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: Rent, electricity, internet, car note, health insurance"
  value={formData.responsibilities.monthlyBills}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      responsibilities: { ...prev.responsibilities, monthlyBills: e.target.value },
    }))
  }
/>


        <label>What subscriptions automatically renew on your cards?</label>
        <textarea
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: Netflix, Spotify, iCloud, gym membership"
        value={formData.responsibilities.subscriptions}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      responsibilities: { ...prev.responsibilities, subscriptions: e.target.value },
    }))
  }
/>

        <label>Who are you scheduled to meet or support in the next 30 days?</label>
        <textarea
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: Appointments, client calls, tutoring sessions, caregiving visits"
        value={formData.responsibilities.next30Days}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      responsibilities: { ...prev.responsibilities, next30Days: e.target.value },
    }))
  }
/>
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2>Where Important Information Lives</h2>
        <p>Note where things are kept—not passwords or numbers, just locations and names.</p>

        <label>Where do you store your passwords or password manager?</label>
        <textarea
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: 1Password app, notebook in top desk drawer"
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
          style={{ width: "100%", minHeight: 70 }}
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
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: Fireproof safe, file box, Google Drive folder"
  value={formData.keyInfo.documentsLocation}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      keyInfo: { ...prev.keyInfo, documentsLocation: e.target.value },
    }))
  }
  />
      </section>

      <section style={{ marginBottom: 28 }}>
        <h2>One Thing You’ve Been Putting Off</h2>
        <p>There’s usually one thing you’ve meant to write down. This is where it goes.</p>

        <label>What’s one thing you keep meaning to write down, but haven’t yet?</label>
        <textarea
          style={{ width: "100%", minHeight: 70 }}
          placeholder="Example: Who should care for my dog, where my spare keys are"
  value={formData.gaps.oneThingToWriteDown}
  onChange={(e) =>
    setFormData((prev) => ({
      ...prev,
      gaps: { ...prev.gaps, oneThingToWriteDown: e.target.value },
    }))
  }
  />
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
