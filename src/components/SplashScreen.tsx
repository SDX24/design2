"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #F5F5F5 0%, #FCFCFC 100%)',
        animation: 'fadeOut 0.5s ease-in-out 2s forwards'
      }}
    >
      {/* Animated Background Elements */}
      <div
        className="absolute top-20 right-10 h-[200px] w-[200px] rounded-full blur-3xl"
        style={{
          background: 'rgba(255, 107, 107, 0.2)',
          animation: 'splashFloat 3s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-20 left-10 h-[250px] w-[250px] rounded-full blur-3xl"
        style={{
          background: 'rgba(58, 123, 213, 0.2)',
          animation: 'splashFloat 4s ease-in-out infinite 1s'
        }}
      />

      {/* Main Content */}
      <div 
        className="flex flex-col items-center gap-6"
        style={{
          animation: 'scaleIn 0.6s ease-out'
        }}
      >
        {/* Animated Logo */}
        <div
          style={{
            animation: 'logoAppear 1s ease-out, splashFloat 2s ease-in-out infinite 1s'
          }}
        >
          <Logo size={120} showText={false} />
        </div>

        {/* "ADULT" Text with stagger animation */}
        <div 
          className="flex items-center justify-center"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
          }}
        >
          <h1
            style={{
              color: '#3A7BD5',
              fontSize: '72px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 100,
              letterSpacing: '0.1em',
              textAlign: 'center'
            }}
          >
            {'ADULT'.split('').map((letter, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: `letterFloat 0.5s ease-out ${0.6 + i * 0.1}s backwards`
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <p
          style={{
            color: '#393E46',
            fontSize: '18px',
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400,
            textAlign: 'center',
            maxWidth: '400px',
            animation: 'fadeInUp 0.8s ease-out 1s backwards'
          }}
        >
          Your guide to climbing life's pyramid
        </p>

        {/* Loading Bar */}
        <div
          className="relative w-48 h-1 rounded-full overflow-hidden"
          style={{
            backgroundColor: '#E3E3E3',
            animation: 'fadeInUp 0.8s ease-out 1.2s backwards'
          }}
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #3A7BD5 0%, #FF6B6B 100%)',
              animation: 'loadingBar 2s ease-in-out forwards'
            }}
          />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeOut {
            to {
              opacity: 0;
              pointer-events: none;
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes logoAppear {
            0% {
              transform: scale(0) rotate(-180deg);
              opacity: 0;
            }
            60% {
              transform: scale(1.1) rotate(10deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes splashFloat {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          @keyframes fadeInUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes letterFloat {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes loadingBar {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `
      }} />
    </div>
  );
}
