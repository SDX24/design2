import { AppShell } from "@/components/AppShell";

export default function ProfilePage() {
  return (
    <AppShell title="Profile">
      <section className="space-y-4">
        <div className="rounded-2xl border border-slate-200 px-4 py-3">
          <p className="text-[11px] text-slate-500 uppercase">Account</p>
          <h2 className="mt-1 text-sm font-semibold">Hey, Adult learner</h2>
          <p className="mt-1 text-xs text-slate-600">
            Future: sign-in, saved guides, and region preferences will live
            here.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Preferences</h3>
          <p className="text-xs text-slate-600">
            In the hi-fi version, you will be able to change your country,
            language, and accessibility settings.
          </p>
        </div>
      </section>
    </AppShell>
  );
}