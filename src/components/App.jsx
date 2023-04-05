import React, { Component, useState } from 'react';
import { Feedback } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnClick = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positivePercentage = Math.round((good / totalFeedback) * 100);
  const options = { good, neutral, bad };

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <Feedback options={options} handleOnClick={handleOnClick} />
      </Section>
      <Section title="Statistics">
        {!totalFeedback ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
