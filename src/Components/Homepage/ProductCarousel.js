// ProductCarousel.js
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const items = [
  {
    label: 'Blend Edit',
    imgPath:
      'https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/Sugnature_Web-banner_1400X400.jpg',
  },
  {
    label: 'Air Clip On',
    imgPath:
      'https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/Fastrack-1400x400_Banners.jpg',
  },
  {
    label: 'Air Flex',
    imgPath:
      'https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/Computerglass_Web-Banner_1400X400.jpg',
  },
  {
    label: 'Retro Aviator',
    imgPath:
      'https://d3995ea24pmi7m.cloudfront.net/fit-in/1450x400/media/wysiwyg/Refer-and-Earn_1400X400.png',
  },
];

function ProductCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Button variant="contained" sx={{ mt: 2 }}>
                  Explore
                </Button>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default ProductCarousel;
