"use client";

import { AccentButton } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (provider: string) => {
    setIsLoading(true);
    // In production, this would redirect to NextAuth sign-in
    // For demo, we'll just show a message
    setTimeout(() => {
      alert(`In production, this would sign in with ${provider}`);
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-5">
      {/* Vibrant gradient background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: '#F5F5F5' }}
        />
        <div 
          className="absolute top-0 left-0 right-0 h-[400px]"
          style={{ 
            background: 'linear-gradient(180deg, rgba(58, 123, 213, 0.15) 0%, rgba(255, 107, 107, 0.08) 50%, transparent 100%)'
          }}
        />
        <div 
          className="absolute top-20 right-0 h-[300px] w-[300px] rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: 'rgba(255, 107, 107, 0.15)',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute bottom-20 left-0 h-[350px] w-[350px] rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: 'rgba(58, 123, 213, 0.15)',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
      </div>

      <div className="w-full max-w-md animate-slideUp">
        {/* Logo / Hero */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center animate-float">
            <Logo size={120} showText={false} />
          </div>
          <h1 
            className="font-bold"
            style={{ 
              fontSize: '56px',
              color: '#3A7BD5',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 100,
              letterSpacing: '0.05em'
            }}
          >
            ADULT
          </h1>
          <p
            className="mt-2"
            style={{
              fontSize: '20px',
              color: '#393E46',
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}
          >
            Welcome back
          </p>
          <p 
            className="mt-3 text-lg"
            style={{ 
              color: '#393E46',
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '18px'
            }}
          >
            Your guide to adulting with confidence
          </p>
        </div>

        {/* Sign In Card */}
        <div 
          className="card-premium animate-scaleIn space-y-4 p-8 rounded-2xl border shadow-soft" 
          style={{ 
            animationDelay: '0.2s',
            backgroundColor: '#FCFCFC',
            borderColor: '#E3E3E3'
          }}
        >
          <div className="space-y-3">
            <h2 
              className="font-bold"
              style={{ 
                fontSize: '28px',
                color: '#222831',
                fontFamily: 'JetBrains Mono, monospace'
              }}
            >
              Sign in to continue
            </h2>
            <p 
              className="text-sm"
              style={{ 
                color: '#393E46',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '16px'
              }}
            >
              Save your progress, bookmark guides, and connect with the community
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <AccentButton
              onClick={() => handleSignIn("Google")}
              disabled={isLoading}
              variant="primary"
              size="lg"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">🔵</span>
                Continue with Google
              </span>
            </AccentButton>

            <AccentButton
              onClick={() => handleSignIn("GitHub")}
              disabled={isLoading}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <span className="text-2xl">⚫</span>
                Continue with GitHub
              </span>
            </AccentButton>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div 
                className="w-full border-t"
                style={{ borderColor: '#E3E3E3' }}
              />
            </div>
            <div className="relative flex justify-center text-xs">
              <span 
                className="px-2"
                style={{ 
                  backgroundColor: '#FCFCFC',
                  color: '#393E46',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}
              >
                OR
              </span>
            </div>
          </div>

          <AccentButton
            onClick={() => router.push("/")}
            variant="outline"
            size="lg"
            className="w-full"
          >
            Continue as guest
          </AccentButton>

          <p 
            className="pt-4 text-center text-xs"
            style={{ 
              color: '#393E46',
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}
          >
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 space-y-3 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
              style={{ backgroundColor: 'rgba(58, 123, 213, 0.1)' }}
            >
              ✨
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: '#393E46',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '16px'
              }}
            >
              Save and track your progress through guides
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
              style={{ backgroundColor: 'rgba(255, 107, 107, 0.1)' }}
            >
              💬
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: '#393E46',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '16px'
              }}
            >
              Join the community and share experiences
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-xl"
              style={{ backgroundColor: 'rgba(58, 123, 213, 0.1)' }}
            >
              🎯
            </div>
            <p 
              className="text-sm"
              style={{ 
                color: '#393E46',
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontSize: '16px'
              }}
            >
              Get personalized guide recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
