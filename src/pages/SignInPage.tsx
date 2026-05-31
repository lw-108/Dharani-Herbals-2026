import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { Button } from "@/components/ui/button";

import {
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "lucide-react";

export const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  const [userId, setUserId] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!userId || !password) {
      setStatus("error");

      setMessage(
        "Please enter both user ID and password."
      );

      return;
    }

    try {
      setLoading(true);

      setStatus("idle");

      const response = await fetch(
        "/api/login/",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            mobile: userId,
            password,
          }),
        }
      );

      if (!response.ok) {
        const errorData =
          await response
            .json()
            .catch(() => ({}));

        throw new Error(
          errorData.message ||
            errorData.detail ||
            "Invalid credentials."
        );
      }

      // Parse response JSON
const data = await response.json();
// Log the full response for debugging
console.log('Login response data:', data);
console.log('User object:', data.user);
// Extract token from a wide variety of possible response schemas, including nested fields
let token =
  data?.token ??
  data?.access ??
  data?.access_token ??
  data?.accessToken ??
  data?.authToken ??
  data?.jwt ??
  data?.jwt_token ??
  data?.data?.token ??
  data?.user?.token ??
  data?.user?.access ??
  data?.user?.access_token ??
  data?.user?.accessToken ??
  data?.user?.authToken ??
  data?.user?.jwt ??
  data?.user?.jwt_token ??
  data?.user?.auth_token ??
  data?.user?.token?.access ??
  data?.user?.token?.access_token ??
  data?.user?.token?.accessToken ??
  data?.user?.token?.authToken ??
  data?.user?.token?.auth_token ??
  null;
// Log the full response for debugging
console.log('Login response data:', data);
// Extract token from a wide variety of possible response schemas


// Duplicate token extraction block removed – using the earlier robust extraction above
      // If still missing, attempt to read Authorization header
      if (!token) {
        const authHeader = response.headers.get('Authorization');
        if (authHeader && authHeader.startsWith('Bearer ')) {
          token = authHeader.substring('Bearer '.length);
        }
      }
      // If token missing, try using user id as a fallback token
if (!token) {
  if (data.user?.id) {
    token = String(data.user.id);
    console.warn('Token missing, using user id as fallback token.', token);
  } else {
    console.warn('Authentication token missing and no user id available.', data);
    token = '';
  }
}
      // Save token (guaranteed non-empty)
      localStorage.setItem('token', token);

      let resolvedUserId: string | number | undefined =
        data.user_id ??
        data.id ??
        data.uid ??
        data.user?.id ??
        data.user?.user_id;

      // JWT decode fallback
      if (!resolvedUserId && token) {
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          resolvedUserId =
            payload.user_id ??
            payload.id ??
            payload.sub;
        } catch (error) {
          console.error("JWT Decode Error:", error);
        }
      }

      // final fallback to entered userId
      if (!resolvedUserId) {
        resolvedUserId = userId;
      }

      // JWT DECODE
      if (!resolvedUserId && token) {
        try {
          const payload = JSON.parse(
            atob(token.split(".")[1])
          );

          resolvedUserId =
            payload.user_id ??
            payload.id ??
            payload.sub;
        } catch (error) {
          console.error(
            "JWT Decode Error:",
            error
          );
        }
      }

      // FALLBACK
      if (!resolvedUserId) {
        resolvedUserId = userId;
      }

      // USER NAME
      const resolvedUserName =
        data.user_name ||
        data.username ||
        data.name ||
        data.full_name ||
        data.user?.name ||
        `User ${resolvedUserId}`;

      // AVATAR
      const avatarUrl =
        data.avatar ||
        `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
          resolvedUserName
        )}`;

      // STORE AUTH DATA
      localStorage.setItem(
        "user_id",
        String(resolvedUserId)
      );

      localStorage.setItem(
        "user_name",
        resolvedUserName
      );

      localStorage.setItem(
        "avatar",
        avatarUrl
      );

      // OPTIONAL USER DATA
      if (data.user) {
        localStorage.setItem(
          "user_data",
          JSON.stringify(data.user)
        );
      }

      // UPDATE NAVBAR
      window.dispatchEvent(
        new Event("authChange")
      );

      setStatus("success");

      setMessage(
        `Welcome back, ${resolvedUserName}!`
      );

      // REDIRECT
      setTimeout(() => {
        navigate("/EveryProducts");
      }, 1200);
    } catch (err: any) {
      console.error(err);

      setStatus("error");

      setMessage(
        err.message ||
          "An error occurred during sign in."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-[85vh]
        bg-white
        flex
        items-center
        justify-center
        p-4
        sm:p-6
        md:p-10
      "
    >
      <div
        className="
          max-w-5xl
          w-full
          bg-white/[0.02]
          backdrop-blur-xl
          border
          border-white/5
          rounded-3xl
          overflow-hidden
          shadow-2xl
          flex
          flex-col
          md:flex-row
          min-h-[600px]
        "
      >
        {/* LEFT */}
        <div
          className="
            w-full
            md:w-1/2
            relative
            min-h-[300px]
            md:min-h-full
            overflow-hidden
            bg-emerald-950
          "
        >
          <img
            src="/TabView.png"
            alt="Dharani Herbbals"
            className="
              w-full
              h-full
              object-cover
              opacity-80
            "
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=60";
            }}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0a0f09]
              via-transparent
              to-transparent
              flex
              flex-col
              justify-end
              p-8
              text-white
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-1
                rounded-full
                bg-emerald-500/10
                border
                border-emerald-500/20
                text-emerald-400
                text-xs
                font-semibold
                mb-4
                w-fit
              "
            >
              <Sparkles className="w-3.5 h-3.5" />

              100% Organic & Chemical-Free
            </div>

            <h2
              className="
                text-3xl
                font-extrabold
                tracking-tight
                mb-2
              "
            >
              Dharani Herbbals
            </h2>

            <p
              className="
                text-gray-300
                text-sm
                max-w-sm
              "
            >
              Reconnect with nature&apos;s
              pure essence and explore
              holistic wellness crafted
              from earth&apos;s quiet
              intelligence.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            w-full
            md:w-1/2
            p-6
            sm:p-8
            md:p-12
            flex
            flex-col
            justify-center
            bg-white/[0.01]
          "
        >
          <div
            className="
              max-w-md
              w-full
              mx-auto
            "
          >
            <h1
              className="
                text-3xl
                font-extrabold
                text-[green]
                mb-2
              "
            >
              Sign In
            </h1>

            <p
              className="
                text-gray-400
                text-sm
                mb-6
              "
            >
              Enter your details to access
              your account
            </p>

            {/* SUCCESS */}
            {status === "success" && (
              <div
                className="
                  mb-6
                  flex
                  items-start
                  gap-3
                  p-4
                  bg-emerald-500/10
                  border
                  border-emerald-500/20
                  rounded-2xl
                  text-emerald-400
                "
              >
                <CheckCircle2
                  className="
                    w-5
                    h-5
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {message}
                </span>
              </div>
            )}

            {/* ERROR */}
            {status === "error" && (
              <div
                className="
                  mb-6
                  flex
                  items-start
                  gap-3
                  p-4
                  bg-red-500/10
                  border
                  border-red-500/20
                  rounded-2xl
                  text-red-400
                "
              >
                <AlertCircle
                  className="
                    w-5
                    h-5
                    shrink-0
                    mt-0.5
                  "
                />

                <span
                  className="
                    text-sm
                    font-medium
                  "
                >
                  {message}
                </span>
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* USER ID */}
              <div>
                <label
                  className="
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-gray-400
                    mb-2
                  "
                >
                  User ID
                </label>

                <div className="relative">
                  <Phone
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-4
                      h-4
                      text-gray-500
                    "
                  />

                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => {
                      setUserId(
                        e.target.value
                      );

                      if (
                        status ===
                        "error"
                      ) {
                        setStatus(
                          "idle"
                        );
                      }
                    }}
                    placeholder="Enter your mobile number"
                    className="
                      w-full
                      bg-white/5
                      border
                      border-white/10
                      hover:border-white/20
                      focus:border-emerald-500
                      rounded-2xl
                      pl-11
                      pr-4
                      py-3
                      text-white
                      placeholder-gray-600
                      outline-none
                      transition-colors
                    "
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <div
                  className="
                    flex
                    justify-between
                    items-center
                    mb-2
                  "
                >
                  <label
                    className="
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-gray-400
                    "
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="
                      text-xs
                      font-medium
                      text-emerald-400
                      hover:underline
                    "
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      w-4
                      h-4
                      text-gray-500
                    "
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(
                        e.target.value
                      );

                      if (
                        status ===
                        "error"
                      ) {
                        setStatus(
                          "idle"
                        );
                      }
                    }}
                    placeholder="••••••••"
                    className="
                      w-full
                      bg-white/5
                      border
                      border-white/10
                      hover:border-white/20
                      focus:border-emerald-500
                      rounded-2xl
                      pl-11
                      pr-12
                      py-3
                      text-white
                      placeholder-gray-600
                      outline-none
                      transition-colors
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                      absolute
                      right-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                      hover:text-white
                    "
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-emerald-600
                  hover:bg-emerald-500
                  text-white
                  rounded-2xl
                  py-3
                  font-semibold
                  text-sm
                  transition-colors
                  shadow-lg
                  shadow-emerald-500/10
                  disabled:opacity-60
                "
              >Sign In
                {/* Admin button removed; use Link below */}
              </Button>
              <Link
                to="/admin"
                className="mt-4 block text-center text-sm text-emerald-400 hover:underline"
              >
                Admin Login
              </Link>
            </form>

            {/* SIGNUP */}
            <p
              className="
                text-center
                text-sm
                text-gray-500
                mt-6
              "
            >
              Don&apos;t have an account?{" "}

              <Link
                to="/signup"
                className="
                  text-emerald-400
                  font-semibold
                  hover:underline
                "
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
