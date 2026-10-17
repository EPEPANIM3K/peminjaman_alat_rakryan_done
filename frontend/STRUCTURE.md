# 📁 Struktur Folder & Dokumentasi Project

## Struktur Project SIPAT

```
frontend/
├── src/
│   ├── pages/                         ← Full page components
│   │   ├── auth/
│   │   │   └── Login/
│   │   │       └── index.jsx          ← Login page (COPY-PASTE READY)
│   │   ├── dashboard/
│   │   │   └── index.jsx
│   │   └── ...
│   │
│   ├── components/                    ← Reusable UI components
│   │   ├── layout/                    ← Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   ├── common/                    ← Common components
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Toast.jsx
│   │   └── feedback/
│   │       ├── ErrorMessage.jsx
│   │       └── LoadingState.jsx
│   │
│   ├── features/                      ← Feature-specific components
│   │   ├── alat/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── hooks/
│   │   ├── peminjaman/
│   │   ├── pengembalian/
│   │   └── log-aktivitas/
│   │
│   ├── contexts/                      ← React Context (global state)
│   │   └── AuthContext.jsx
│   │
│   ├── hooks/                         ← Custom React hooks
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   │
│   ├── services/                      ← API services
│   │   ├── api.js
│   │   └── authService.js
│   │
│   ├── utils/                         ← Utility functions
│   │   ├── cn.js                      ← Classname merger
│   │   └── formatters.js
│   │
│   ├── routes/                        ← Route configuration
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── App.jsx                        ← Main app component
│   ├── main.jsx                       ← Entry point
│   └── index.css                      ← Global styles
│
├── vite.config.js                     ← Vite configuration
├── index.html                         ← HTML template
├── package.json
├── STRUCTURE.md                       ← Dokumentasi ini
└── README.md
```

---

## 🚀 Cara Penggunaan

### 1. Membuat Halaman Baru (Mudah & Copy-Paste)

#### Step-by-step:

**Step 1: Buat folder**
```bash
mkdir src/pages/[nama-halaman]
```

**Step 2: Buat file `index.jsx`**

File: `src/pages/[nama-halaman]/index.jsx`

```jsx
import { useState } from "react";

export default function NamaHalaman() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-surface-bg">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <h1 className="text-3xl font-headline font-bold text-slate-900">
            Nama Halaman
          </h1>
          <p className="mt-2 text-sm text-slate-500">Deskripsi halaman</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <p className="text-slate-600">Konten Anda di sini</p>
        </div>
      </main>
    </div>
  );
}
```

**Step 3: Update `App.jsx`**

```jsx
import NamaHalaman from "./pages/[nama-halaman]";

export default function App() {
  return <NamaHalaman />;
}
```

**Step 4: Done! ✅**

---

### 2. Membuat Komponen Reusable

#### Struktur folder:
```
src/components/common/
├── Button.jsx
├── Input.jsx
├── Modal.jsx
└── Toast.jsx
```

#### Template: `src/components/common/Button.jsx`

```jsx
export default function Button({ 
  children, 
  onClick, 
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
  ...props 
}) {
  const baseStyles = "font-headline font-semibold rounded-lg transition-all";
  
  const variants = {
    primary: "bg-primary-700 text-white hover:bg-primary-800 disabled:bg-slate-400",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:bg-slate-200",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-slate-400",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

#### Cara menggunakan:

```jsx
import Button from "./components/common/Button";

export default function MyPage() {
  const handleClick = () => alert("Clicked!");

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
      <Button variant="secondary" size="lg">Secondary Button</Button>
      <Button variant="danger" disabled>Delete</Button>
    </div>
  );
}
```

---

### 3. Membuat Input Component

File: `src/components/common/Input.jsx`

```jsx
export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  disabled = false,
  required = false,
  icon,
  ...props
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1.5 block font-headline text-sm font-semibold text-slate-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative flex items-center">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 text-slate-400">
            {icon}
          </span>
        )}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full h-11 rounded-lg border-2 px-3 py-2 text-sm
            transition-all focus:outline-none
            ${icon ? "pl-10" : ""}
            ${error 
              ? "border-red-500 bg-red-50 focus:border-red-600" 
              : "border-slate-200 bg-slate-50 focus:border-primary-600 focus:bg-white"
            }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
```

#### Cara menggunakan:

```jsx
import Input from "./components/common/Input";
import { useState } from "react";

export default function FormExample() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on change
  };

  return (
    <div className="space-y-4">
      <Input
        label="Email"
        type="email"
        icon="mail"
        placeholder="Enter your email"
        value={email}
        onChange={handleChange}
        error={error}
        required
      />
      
      <Input
        label="Password"
        type="password"
        icon="lock"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
```

---

### 4. Membuat Modal Component

File: `src/components/common/Modal.jsx`

```jsx
export default function Modal({ isOpen, title, children, onClose, footer }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 p-6">
          <h2 className="text-lg font-headline font-bold text-slate-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="border-t border-slate-200 p-6 flex gap-2 justify-end">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
```

#### Cara menggunakan:

```jsx
import Modal from "./components/common/Modal";
import Button from "./components/common/Button";
import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal
        isOpen={isOpen}
        title="Confirm Action"
        onClose={() => setIsOpen(false)}
        footer={
          <>
            <Button 
              variant="secondary" 
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => {
              // Do something
              setIsOpen(false);
            }}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Apakah Anda yakin ingin melakukan aksi ini?</p>
      </Modal>
    </>
  );
}
```

## 🎨 Tailwind CSS - Warna & Styling

### Warna Tema yang Sudah Ada

```jsx
// Primary colors
<div className="bg-primary-700">Primary 700 (#1d4ed8)</div>
<div className="bg-blue-600">Blue 600 (#2563eb)</div>

// Background
<div className="bg-surface-bg">Surface Background (#f8faff)</div>

// Slate
<div className="text-slate-800">Text Default</div>
<div className="text-slate-500">Text Secondary</div>
```

### Font Family

```jsx
// Font Manrope (sans-serif)
<p className="font-sans">Ini pakai Manrope</p>

// Font Plus Jakarta Sans (headline)
<h1 className="font-headline">Ini pakai Plus Jakarta Sans</h1>
```

### Responsive Classes (Mobile First)

```jsx
// Mobile: full width, Desktop (lg): half width
<div className="w-full lg:w-1/2">
  Responsive width
</div>

// Hide on mobile, show on lg
<div className="hidden lg:block">Desktop only</div>
```

## 📋 Komponen Yang Sudah Siap Pakai

### 1. Login Page
- **Path:** `src/pages/auth/Login/index.jsx`
- **Features:**
  - Role switcher (Admin, Petugas, Peminjam)
  - Password toggle visibility
  - Toast notifications
  - Loading state
  - Responsive design

### Cara Copy-Paste:
1. Copy keseluruhan file `src/pages/auth/Login/index.jsx`
2. Paste ke halaman baru Anda
3. Modifikasi sesuai kebutuhan
4. Import & gunakan di `App.jsx`

## 🚀 Common Patterns

### Pattern 1: State Management Lokal

```jsx
import { useState } from "react";

export default function MyComponent() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
    setLoading(true);
    // do something
    setLoading(false);
  };
  
  return (
    <div>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={loading} onClick={handleSubmit}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </div>
  );
}
```

### Pattern 2: Form dengan Validasi

```jsx
const [form, setForm] = useState({ email: "", password: "" });
const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
};

const validate = () => {
  const newErrors = {};
  if (!form.email) newErrors.email = "Email wajib diisi";
  if (!form.password) newErrors.password = "Password wajib diisi";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    // Submit form
  }
};
```

### Pattern 3: Toast Notification

```jsx
const [toast, setToast] = useState(null);
const toastTimer = useRef(null);

const showToast = (title, message, type = "info") => {
  if (toastTimer.current) clearTimeout(toastTimer.current);
  setToast({ title, message, type });
  toastTimer.current = setTimeout(() => setToast(null), 4500);
};

// Usage
<button onClick={() => showToast("Success", "Data saved!", "success")}>
  Save
</button>

{toast && (
  <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-4">
    <strong>{toast.title}</strong>
    <p>{toast.message}</p>
  </div>
)}
```

## 🎯 Tips & Tricks

### 1. Menggunakan Inline Tailwind (Recommended)
✅ **BAIK** - Langsung tulis class di JSX
```jsx
<div className="bg-blue-600 p-4 rounded-lg text-white">
  Hello
</div>
```

❌ **HINDARI** - CSS module dengan Tailwind @apply
```css
/* Bisa bermasalah di build */
.button {
  @apply bg-blue-600 p-4 rounded-lg;
}
```

### 2. Breakpoints Tailwind
```jsx
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### 3. Conditional Styling
```jsx
const isActive = true;

<div className={isActive ? "bg-green-500" : "bg-gray-500"}>
  {isActive ? "Active" : "Inactive"}
</div>
```

### 4. Material Icons
```jsx
// Material Symbols Outlined (sudah include di HTML)
<span className="material-symbols-outlined">
  settings
</span>

// Available icons: https://fonts.google.com/icons
```

## 📦 Install Dependencies (jika perlu)

```bash
# Sudah installed:
npm list | grep -E "react|tailwind"

# Jika perlu install package baru:
npm install [package-name]
```

## 🔄 Development Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Buka http://localhost:5173

# 3. Edit file, browser auto-reload

# 4. Build untuk production
npm run build

# 5. Preview production build
npm run preview
```

## ❓ Troubleshooting

### Error: "Cannot find module"
- Pastikan path import benar
- Gunakan relative path: `../components/Button`

### Styling tidak muncul
- Cek apakah class Tailwind sudah benar
- Refresh browser (Ctrl+Shift+R)

### Dev server tidak jalan
```bash
# Kill process lama
npm run dev

# atau manual kill di terminal
```

---

**Created:** 2026-10-16  
**Project:** SIPAT - Sistem Peminjaman Alat
