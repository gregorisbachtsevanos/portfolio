import anime from 'animejs';

const animateStaggered = (targets: string, stagger: number) => {
  const animation = anime.timeline({
    targets,
    easing: 'easeInOutExpo',
    loop: true,
  });

  animation
    .add({
      rotate: () => anime.random(-360, 360),
      translateX: () => anime.random(-500, 500),
      translateY: () => anime.random(-500, 500),
      duration: 4000,
      delay: anime.stagger(stagger),
    })
    .add({
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 4000,
      delay: anime.stagger(stagger),
    });
};

export const lettersAnimation = () => {
  const title = document.querySelector('.animate-title');
  const text = document.querySelector('.animate-text');

  //   if (!title || !text) return;

  const titleContent = title?.textContent;
  const textContent = text?.textContent;

  if (!titleContent || !textContent) return;

  title.innerHTML = titleContent.replace(/\S/g, '<span>$&</span>');
  text.innerHTML = textContent.replace(/\S/g, '<span>$&</span>');

  const titleSpans = document.querySelectorAll('.animate-title span');
  const textSpans = document.querySelectorAll('.animate-text span');

  // Cache the target elements and reuse them
  if (titleSpans.length > 0) {
    animateStaggered('.animate-title span', 20);
  }

  if (textSpans.length > 0) {
    animateStaggered('.animate-text span', 20);
  }
};
