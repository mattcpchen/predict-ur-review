import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Text } from "pcln-design-system";
import { debounce } from "../../../helpers/utilities";


const StyledTextArea = styled.textarea`
  border:1px solid #999999;
  width:100%;
  margin:5px 0;
  padding:3px;
`

const ReviewTextArea = ({defaultReview, handleAnalyze}) => {
  const [review, updateReview] = useState(defaultReview);
  const [debounceCall, updateDebounceCall] = useState(
    debounce.bind(null, handleAnalyze, 1000)
  );

  useEffect(()=>{
    updateReview(defaultReview);
  }, [defaultReview]);

  const handleOnChange = (event) => {
    updateReview(event.target.value);
    debounceCall(event.target.value);
  }

  return (
    <Box mt={2} mb={2}>
      <Text>Tell me how do you like this hotel:</Text>
      <StyledTextArea
        id="txtArea"
        rows="10"
        cols="70"
        value={review}
        onChange={handleOnChange}
      ></StyledTextArea>
    </Box>
  )
}


ReviewTextArea.propTypes = {
  defaultReview: PropTypes.string,
  handleAnalyze: PropTypes.func
};
ReviewTextArea.defaultProps = {
  defaultReview: ''
}


export default ReviewTextArea
