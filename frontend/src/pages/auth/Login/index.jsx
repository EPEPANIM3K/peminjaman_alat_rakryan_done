import { useState, useRef, useEffect } from "react";

// ============= DATA & CONFIG =============
const DEMO_ACCOUNTS = {
  admin: {
    user: "admin1",
    pass: "admin123",
    name: "Admin Utama Lab",
    desc: "Role Administrator Terpilih: Akses penuh inventaris, approval, & kalibrasi.",
  },
  petugas: {
    user: "pet01",
    pass: "pet01pass",
    name: "Petugas Bengkel",
    desc: "Role Petugas: Pengembalian, serah terima alat, & log verifikasi fisik.",
  },
  peminjam: {
    user: "budi_s",
    pass: "mhs2026",
    name: "Peminjam (Mahasiswa)",
    desc: "Role Mahasiswa: Pengajuan pinjam instrumen, riwayat, & kuota unit.",
  },
};

const ROLES = [
  { key: "admin", label: "Admin Utama" },
  { key: "petugas", label: "Petugas Bengkel" },
  { key: "peminjam", label: "Peminjam (Mhs)" },
];

// ============= MAIN COMPONENT =============
export default function LoginPage() {
  const [role, setRole] = useState("admin");
  const [username, setUsername] = useState(DEMO_ACCOUNTS.admin.user);
  const [password, setPassword] = useState(DEMO_ACCOUNTS.admin.pass);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  // Handlers
  const showToast = (title, message, icon = "info", type = "info") => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ title, message, icon, type });
    toastTimer.current = setTimeout(() => setToast(null), 4500);
  };

  const handleRoleChange = (roleKey) => {
    const account = DEMO_ACCOUNTS[roleKey];
    setRole(roleKey);
    setUsername(account.user);
    setPassword(account.pass);
    showToast(account.name, account.desc, "check_circle", "success");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast(
        "Autentikasi Berhasil",
        `Selamat datang, ${username}. Mengarahkan ke Dashboard...`,
        "verified",
        "success"
      );
    }, 900);
  };

  const handleForgotPassword = () => {
    showToast(
      "Bantuan Sandi Lab",
      "Hubungi lab-support@rekayasa.ac.id atau kunjungi Loket Lab Sentral Lt. 2.",
      "help",
      "info"
    );
  };

  const hideToast = () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(null);
  };

  // ============= RENDER =============
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-x-hidden bg-surface-bg px-4 py-8 font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-700">
      {/* Background Grid & Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-full max-w-4xl -translate-x-1/2 bg-gradient-to-b from-blue-100/50 via-blue-50/20 to-transparent blur-3xl" />

      {/* Header */}
      <header className="relative z-10 mb-6 w-full">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center text-center">
          <a href="#" className="group inline-flex items-center gap-3" onClick={(e) => e.preventDefault()}>
            <img
              alt="Logo SIPAT"
              className="h-10 w-10 rounded-xl object-contain shadow-sm shadow-blue-500/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWZ25V6gR0kW7xUu3v2p-NwJIZVODNe_uc0mb0Zgx-_NtNXWgFOmNyH_-yYgB9_UdHDKEzxiJyHZ8wgFJH9QjtvX7laabbcoDNWgViDzNbdb1CfFcmmmODwomU9mf5OeiEyx6wvhG2olNX6IdN3wOCYwmcAbqHoxZFVoabdk4RvMxHrnOP5bWlWiL0e_ySSyHCISm4QyLuDtX7-pLgGi7dGM-CW3Ym-CBhsAP9B7I-IYZqVrqfD_Be1zEaSLkkQ-USWg"
            />
            <div className="flex flex-col text-left">
              <span className="font-headline text-2xl font-extrabold leading-none tracking-tight text-primary-700">SIPAT</span>
              <span className="mt-1 font-headline text-xs font-semibold tracking-wide text-slate-500">Sistem Peminjaman Alat</span>
            </div>
          </a>
        </div>
      </header>

      {/* Login Card */}
      <main className="relative z-10 my-auto w-full max-w-4xl">
        <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70 lg:flex-row">
          
          {/* LEFT PANEL - Info Section */}
          <aside className="relative flex w-full flex-col justify-between overflow-hidden bg-primary-700 p-8 text-white lg:w-5/12">
            {/* Orbs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-blue-500/40 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />

            {/* Online Badge */}
            <div className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Online</span>
            </div>

            {/* Content */}
            <div className="relative z-10 my-auto">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 p-2 shadow-sm backdrop-blur-md">
                <img
                  alt="SIPAT Icon"
                  className="h-full w-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWZ25V6gR0kW7xUu3v2p-NwJIZVODNe_uc0mb0Zgx-_NtNXWgFOmNyH_-yYgB9_UdHDKEzxiJyHZ8wgFJH9QjtvX7laabbcoDNWgViDzNbdb1CfFcmmmODwomU9mf5OeiEyx6wvhG2olNX6IdN3wOCYwmcAbqHoxZFVoabdk4RvMxHrnOP5bWlWiL0e_ySSyHCISm4QyLuDtX7-pLgGi7dGM-CW3Ym-CBhsAP9B7I-IYZqVrqfD_Be1zEaSLkkQ-USWg"
                />
              </div>
              <h2 className="mb-3 font-headline text-2xl font-bold leading-snug tracking-tight text-white">
                Manajemen Inventaris &amp; Fasilitas Alat
              </h2>
              <p className="mb-6 text-xs leading-relaxed text-blue-100/90">
                Sistem integrasi peminjaman instrumen riset, kalibrasi mesin, dan peralatan bengkel teknik dengan verifikasi digital real-time.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                  <div className="font-headline text-xl font-bold text-white">98.4%</div>
                  <div className="mt-0.5 text-[11px] text-blue-200">Kesiapan Alat Lab</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
                  <div className="font-headline text-xl font-bold text-white">1,420+</div>
                  <div className="mt-0.5 text-[11px] text-blue-200">Total Aset Aktif</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-6 border-t border-white/10 pt-6" />
          </aside>

          {/* RIGHT PANEL - Form Section */}
          <section className="flex w-full flex-col justify-between bg-white p-8 lg:w-7/12 lg:p-10">
            <div>
              {/* Heading */}
              <div className="mb-6">
                <h1 className="mb-1.5 font-headline text-xl font-bold text-slate-900">SIPAT — Sistem Peminjaman Alat</h1>
                <p className="text-sm text-slate-500">Silakan masuk menggunakan akun institusi/lab Anda untuk melanjutkan.</p>
              </div>

              {/* Role Switcher */}
              <div className="mb-6">
                <label className="mb-2 block font-headline text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pilih Peran Demo
                </label>
                <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-slate-200/60 bg-slate-100/80 p-1.5">
                  {ROLES.map(({ key, label }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleRoleChange(key)}
                      className={`rounded-lg px-2 py-2 text-center font-headline text-xs font-semibold transition-all duration-150 ${
                        role === key
                          ? "bg-primary-700 text-white shadow-sm"
                          : "font-medium text-slate-600 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="mb-1.5 block font-headline text-xs font-semibold text-slate-700">
                    Username / NIP / NIM
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined pointer-events-none absolute left-3.5 text-[20px] text-slate-400">
                      badge
                    </span>
                    <input
                      id="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Contoh: admin1 atau 21040188"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="font-headline text-xs font-semibold text-slate-700">
                      Kata Sandi
                    </label>
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="font-headline text-xs font-semibold text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                    >
                      Lupa Password?
                    </button>
                  </div>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined pointer-events-none absolute left-3.5 text-[20px] text-slate-400">
                      lock
                    </span>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan kata sandi..."
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-11 text-sm text-slate-800 outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 flex items-center justify-center rounded-lg p-1.5 text-slate-400 transition-colors hover:text-slate-600"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between pt-1">
                  <label className="inline-flex cursor-pointer select-none items-center gap-2">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 cursor-pointer rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-0"
                    />
                    <span className="text-xs text-slate-600">Ingat sesi perangkat ini</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-3 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary-700 font-headline text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-primary-800 active:scale-[0.99] disabled:opacity-80 disabled:cursor-wait"
                >
                  {loading ? (
                    <>
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Memverifikasi Otoritas...</span>
                    </>
                  ) : (
                    <>
                      <span>Masuk ke Sistem</span>
                      <span className="material-symbols-outlined text-[18px]">login</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Footer */}
            <div className="mt-8 border-t border-slate-100 pt-4 text-center">
              <p className="text-xs text-slate-400">
                © 2026 SIPAT Bengkel &amp; Lab Rekayasa Industri. All rights reserved.
                <span className="ml-0.5 font-mono text-[11px] font-semibold text-slate-500">v0.1</span>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="relative z-10 mt-6 w-full">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-2 px-4 text-center text-xs text-slate-400 sm:flex-row">
          <span>SIPAT Core Engine</span>
          <span className="inline-block h-1 w-1 rounded-full bg-slate-300" />
          <span className="font-mono font-semibold text-blue-600">versi aplikasi 0.1</span>
        </div>
      </footer>

      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          className={`pointer-events-auto fixed bottom-6 right-6 z-50 flex w-full max-w-sm translate-y-0 items-start gap-3 rounded-xl border border-l-4 border-slate-100 bg-white p-4 opacity-100 shadow-2xl transition-all duration-300 ${
            toast.type === "success" ? "border-l-green-600" : "border-l-primary-700"
          }`}
        >
          <span
            className={`material-symbols-outlined text-[24px] ${
              toast.type === "success" ? "text-green-600" : "text-primary-700"
            }`}
          >
            {toast.icon}
          </span>
          <div className="flex-1">
            <h4 className="font-headline text-xs font-bold text-slate-900">{toast.title}</h4>
            <p className="mt-0.5 text-xs text-slate-600">{toast.message}</p>
          </div>
          <button
            type="button"
            onClick={hideToast}
            className="text-slate-400 transition-colors hover:text-slate-700"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
