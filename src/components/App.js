import React, { useState } from 'react'
import { Container, Card } from 'pcln-design-system'
import analyzeReview from '../helpers/tfService'
import HotelHolder from "./organisms/HotelHolder";
import ReviewTextArea from "./organisms/ReviewTextArea";
import Footer from "./organisms/Footer";



const App = () => {
  const [rating, updateRating] = useState({
    tfScore: -1,
    emojiScore: -1
  });
  const [defaultReview, updateDefaultReview] = useState('');

  const handlePreloadReview = (defReview) => {
    updateDefaultReview(defReview);
    analyze(defReview);
  };

  const analyze = (review) => {
    analyzeReview(review, (a, score)=>{
      const tfScore = Number(score);
      const emojiScore = Math.round((score-0)/10); // 0-10
      // console.log('===> ', a);
      // console.log('===> ', tfScore, emojiScore);
      updateRating({
        tfScore: tfScore,  // 0-100
        emojiScore: emojiScore //0-10
      });
    });
  }

  return (
    <Container maxWidth={600} >
      <Card
        boxShadowSize='xl'
        borderWidth={0}
        borderRadius={6}
        p={4}>
        <HotelHolder />
        <ReviewTextArea
          defaultReview={defaultReview}
          handleAnalyze={analyze}
        />
        <Footer
          rating={rating}
          handlePreloadReview={handlePreloadReview}
        />
      </Card>
    </Container>
  )
}


App.propTypes = {}
App.defaultProps = {}

export default App
