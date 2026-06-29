import confetti from "canvas-confetti";

const tagconColors = ["#fbc401", "#ffb700", "#f05824", "#ffffff", "#162526"];

function getConfettiScale() {
  const width = window.innerWidth;

  if (width < 640) {
    return { burst: 45, side: 2, duration: 1800, scalar: 0.85 };
  }

  if (width < 1024) {
    return { burst: 80, side: 3, duration: 2200, scalar: 1 };
  }

  return { burst: 120, side: 4, duration: 2500, scalar: 1.1 };
}

export function fireTagconConfetti() {
  const { burst, side, duration, scalar } = getConfettiScale();

  confetti({
    particleCount: burst,
    spread: 80,
    origin: { y: 0.55 },
    colors: tagconColors,
    ticks: 200,
    gravity: 0.9,
    scalar,
    zIndex: 9999,
  });

  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: side,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.65 },
      colors: tagconColors,
      scalar,
      zIndex: 9999,
    });
    confetti({
      particleCount: side,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.65 },
      colors: tagconColors,
      scalar,
      zIndex: 9999,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}
