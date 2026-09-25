import { LayoutDashboard, User, LogOut, Lock, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const inputClass = "w-full border-2 border-gray-100 p-3 rounded-xl focus:border-blue-500 outline-none transition-all bg-gray-50/50 focus:bg-white";
const labelClass = "text-xs font-bold text-gray-400 uppercase ml-1 mb-1 block";
const btnClass = "w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-3 rounded-xl shadow-lg active:scale-95 disabled:opacity-50 transition-all";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({ name: "", userName: "", email: "", phone: "" });
  const [passwordData, setPasswordData] = useState({ oldPassword: "", newPassword: "" });

  const handleLogout = useCallback(() => {
    localStorage.clear();
    toast.success("Logged out successfully")
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token")
      const userid = localStorage.getItem("userid")

      if (!token || !userid || userid === "undefined") return handleLogout()

      try {
        setLoading(true);
        const res = await fetch(`https://www.kradfly.com/api/user/profile/${userid}`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) {
          if (res.status === 401) return handleLogout();
          throw new Error(data.message || "Failed to fetch user")
        }

        setFormData({
          name: data.data?.name || "",
          userName: data.data?.userName || "",
          email: data.data?.email || "",
          phone: data.data?.phone || ""
        });
      } catch (err) {
        toast.error(err.message || "Profile load failed");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [handleLogout]);

  const apiRequest = async (url, method, body, successMsg) => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(body)
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          typeof result.message === "object"
            ? Object.values(result.message).join(", ")
            : result.message || "Something went wrong"
        );
      }
      toast.success(successMsg);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = () => {
    const userid = localStorage.getItem("userid")
    apiRequest(`https://www.kradfly.com/api/user/update/${userid}`, "PUT", formData, "Profile Updated ✅");
  };

  const handlePasswordChange = () => {
    const userid = localStorage.getItem("userid");

    apiRequest(
      `https://www.kradfly.com/api/user/update/${userid}`,
      "PUT",
      passwordData,
      "Password Changed Successfully 🔐"
    );

    setPasswordData({ oldPassword: "", newPassword: "" })
  };

  return (
    <div className=" bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex mt-15 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
        >
          <span className="font-bold text-blue-600">DASHBOARD MENU</span>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <aside className={`
          fixed md:relative inset-y-0 left-0 mt-15 z-50 w-72 md:w-64 bg-white md:bg-transparent p-6 md:p-0
          transition-transform md:translate-x-0 ${isMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"}
        `}>
          <div className="md:bg-white md:p-6 md:rounded-3xl md:shadow-sm md:border md:border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-xl text-white shadow-blue-200 shadow-lg">
                <LayoutDashboard size={20} />
              </div>
              <h2 className="text-xl font-black text-gray-800 tracking-tight">DASHBOARD</h2>
            </div>

            <nav className="space-y-1">
              {[
                { id: "profile", label: "My Profile", icon: <User size={18} /> },
                { id: "password", label: "Security", icon: <Lock size={18} /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setIsMenuOpen(false); }}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === tab.id ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-gray-500 hover:bg-gray-50"
                    }`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button onClick={handleLogout} className="w-full cursor-pointer flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-semibold transition-colors">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </nav>
          </div>
        </aside>

        {isMenuOpen && <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />}

        <main className="flex-1">
          <div className="max-w-2xl bg-white p-6 md:p-10 md:mt-15 rounded-3xl shadow-sm border border-gray-100">
            {activeTab === "profile" ? (
              <section className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-gray-800 mb-8">{formData.name}</h2>
                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>user Name</label>
                    <input type="text" value={formData.userName} className={`${inputClass}`} />
                  </div>
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input type="email" value={formData.email} disabled className={`${inputClass}`} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} />
                  </div>
                  <button onClick={handleUpdate} disabled={loading} className={btnClass}>
                    {loading ? "Saving Changes..." : "Update Profile"}
                  </button>
                </div>
              </section>
            ) : (
              <section className="animate-in fade-in duration-500">
                <h2 className="text-2xl font-black text-gray-800 mb-8">Password & Security</h2>
                <div className="space-y-6">
                  <div>
                    <label className={labelClass}>Old Password</label>
                    <input type="password" placeholder="••••••••" value={passwordData.oldPassword} onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>New Password</label>
                    <input type="password" placeholder="••••••••" value={passwordData.newPassword} onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })} className={inputClass} />
                  </div>
                  <button onClick={handlePasswordChange} disabled={loading} className={btnClass}>
                    {loading ? "Updating..." : "Change Password"}
                  </button>
                </div>
              </section>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-medium animate-bounce">
                {error}
              </div>
            )}
          </div>
        </main>

      </div>
    </div>
  );
}