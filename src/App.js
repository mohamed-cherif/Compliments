import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [selectedCompliment, setSelectedCompliment] = useState('');

  useEffect(() => {
    const compliments = [
      "Your smile is like a ray of sunshine on a cloudy day.",
      "If being awesome was a sport, you'd be a gold medalist.",
      "Your positive energy could power a small city.",
      "You have a smile that could light up the darkest room.",
      "If there was an award for being effortlessly cool, you'd win it every time.",
      "You have a laugh that's contagious in the best way possible.",
      "Your fashion sense is on point, and I'm low-key jealous.",
      "You're like a human emoji – always expressing emotions in the most adorable way.",
      "If there was a cuteness Olympics, you'd definitely take home the gold.",
      "Your sense of humor is a breath of fresh air in a world that can be too serious.",
      "You have a way of making the ordinary feel extraordinary.",
      "Your kindness is a superpower that could save the world.",
      "If smiles were currency, you'd be a millionaire.",
      "You have a heart of gold that shines brighter than any treasure.",
      "Your positivity is so infectious; it should come with a warning label.",
      "Your presence alone makes any place feel like a happy place.",
      "You have the magical ability to turn a bad day into a good one with just a smile.",
      "Your sense of style is as unique and charming as you are.",
      "You're a living, breathing work of art – with a smile that's the masterpiece.",
      "Your sense of humor could make even a grumpy cat crack a smile.",
      "You bring so much sunshine into the lives of those around you.",
      "Your laughter is like a melody that makes everything brighter.",
      "Your positive outlook on life is refreshing and inspiring.",
      "You have a knack for making people feel instantly comfortable and at ease.",
      "Your wit is sharper than a ninja's sword, and just as entertaining.",
      "Your inner child is alive and well, and it's absolutely adorable.",
      "Your creativity knows no bounds; you're like a walking masterpiece.",
      "You have a smile that could melt even the iciest of hearts.",
      "Your positive vibes are like a magnet – they attract all the good things in life.",
      "Your kindness is like a warm hug for the soul.",
      "You have a face that should be on the cover of a magazine.",
      "Your personality is as vibrant and colorful as a rainbow.",
      "Your energy is infectious, and I want to be around you all the time.",
      "You have a talent for making people feel special and appreciated.",
      "Your jokes are always on point – you should start a comedy show.",
      "Your smile could make even the Grinch believe in holiday magic.",
      "You have the charm of a Disney character – adorable and enchanting.",
      "Your presence lights up a room like a Christmas tree.",
      "You're the kind of person who can make even the toughest days feel bearable.",
      "Your enthusiasm for life is contagious and inspiring.",
      "You have a heart so big that it could make Santa's look small.",
      "You're a master of spreading joy and happiness wherever you go.",
      "Your optimism could give the Energizer Bunny a run for its money.",
      "You have the ability to turn a frown upside down with just a few words.",
      "You're the epitome of 'cool' – sunglasses should be permanently glued to your face.",
      "Your sense of adventure is truly admirable and makes life so much more exciting.",
      "You have a personality that could make even a rock burst into laughter.",
      "Your happiness is like a magnet; it attracts all the good things in life.",
      "You're the human version of a warm, cozy blanket on a chilly day.",
      "Your positive attitude could rival the sun – it never stops shining.",
      "You're a one-person comedy show – seriously, can I buy tickets?",
      "Your confidence is as awe-inspiring as a superhero's cape.",
      "You have a smile that could turn any Monday into a Fri-yay!",
      "Your charm is so powerful that you could convince a cat to take a bath.",
      "You're a walking bundle of joy – someone should put a bow on you.",
      "Your quick wit could give a stand-up comedian a run for their money.",
      "You have a talent for making even the simplest things in life extraordinary.",
      "Your charisma is off the charts – people can't help but be drawn to you.",
      "You bring sunshine into the lives of those around you, even on the cloudiest days.",
      "Your humor is like a secret weapon; it can disarm anyone with laughter.",
      "You have a knack for turning everyday moments into magical memories.",
      "Your positive energy is like a refreshing breeze on a hot summer day.",
      "You're the kind of person who can make even the most mundane tasks seem fun.",
      "Your smile should be copyrighted – it's that precious.",
      "Your joyful spirit is like a party that never ends.",
      "You have a personality that's as sweet and delightful as a perfectly baked cookie.",
      "Your jokes are so funny that even the grumpiest of people can't help but laugh.",
      "You have the power to make even the most ordinary day feel extraordinary.",
      "Your presence alone can make any place feel like a party.",
      "You have a smile that's as infectious as a baby's giggle.",
      "Your positive energy is like a magnet that attracts good things into your life.",
      "You have a talent for finding the silver lining in any situation – it's truly inspiring.",
      "Your sense of humor is so sharp that it could cut through a dull day.",
      "You have a knack for making people feel seen and appreciated – it's a rare gift.",
      "Your laughter is like music to my ears – it brightens up my day.",
      "You have a charm that's as irresistible as a freshly baked pie.",
      "Your positive attitude is like a superpower that can conquer any challenge.",
      "You have a way of making everyone around you feel like the most important person in the room.",
      "Your happiness is like a boomerang – it always comes back to you.",
      "You have a smile that's as bright as a shooting star.",
      "Your enthusiasm is contagious – it's impossible not to get excited when you're around.",
      "You have a spirit that's as free as a butterfly – always ready to embrace new adventures.",
      "Your positive energy is like a cup of coffee – it gives me a boost of happiness.",
      "You have a talent for finding joy in the simplest things – it's truly inspiring.",
      "Your presence alone can turn any frown upside down.",
      "You have a way of making even the most mundane tasks feel like a fun-filled adventure.",
      "Your kindness is like a gentle breeze on a hot summer day – it's so refreshing.",
      "You have a smile that's as warm and comforting as a cozy fireplace."
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];
    setSelectedCompliment(randomCompliment);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {selectedCompliment}
        </p>
        <p style={{ fontSize: 15 }}>
          Made with ❤ by <a href='https://www.linkedin.com/in/mohamed-cherif-braham-80845720a/'>Mohamed Cherif Braham</a>. Give a warm visit to Psybot.
      </p>
      </header>
    </div>
  );
}

export default App;
