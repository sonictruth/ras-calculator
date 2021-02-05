import Slider from '@material-ui/core/Slider';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Switch from '@material-ui/core/Switch';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import calculateRas, {
    minAge,
    maxAge,
    minPeriods,
    maxPeriods,
} from './calculateRas';

import calculateBmi from './calculateBmi';
import convert from './unitConverter';


function Calculator() {
    const [isImperial, setImperial] = useState(false);
    const [age, setAge] = useState(43);
    let [height, setHeight] = useState(convert(160, 'cm', isImperial));
    let [weight, setWeight] = useState(convert(50, 'kg', isImperial));
    const [periods, setPeriods] = useState(12);
    const [ovary, setOvary] = useState('0');
    const [smoke, setSmoke] = useState('0');

    const history = useHistory();

    const minHeight = convert(150, 'cm', isImperial);
    const maxHeight = convert(185, 'cm', isImperial);
    const minWeight = convert(45, 'kg', isImperial);
    const maxWeight = convert(130, 'kg', isImperial);
    height = convert(height, 'cm', isImperial);
    weight = convert(weight, 'kg', isImperial);
    const setHeightI = (value: number) => setHeight(convert(value as number, 'in', isImperial));
    const setWeightI = (value: number) => setWeight(convert(value as number, 'lb', isImperial));



    function handleCalculate() {
        const ras = calculateRas(age, periods, parseInt(ovary), parseInt(smoke));
        const bmi = calculateBmi(convert(height, 'in', isImperial), convert(weight, 'lb', isImperial));
        history.push(`/result/${ras}/${bmi}/${age}/${periods}/${ovary}/${smoke}`)
    }
    return (
        <>

            <Box className="calc-bmi" display="flex" justifyContent="center">
                <FormControlLabel
                    control={<Switch
                        checked={isImperial}
                        onChange={(event, value) => setImperial(value)} />}
                    label="Use imperial units ?"
                />
            </Box>

            <Box pb={4}>
                <Box pt={4}>
                    <Typography gutterBottom>How old are you ? (years)</Typography>
                    <Box px={0} py={4}>
                        <Slider
                            value={age}
                            onChange={(event: any, value: any) => setAge(value)}
                            valueLabelDisplay="on"
                            min={minAge}
                            max={maxAge}
                        />
                    </Box>
                </Box>

                <Box pb={4} className="calc-bmi">
                    <Typography gutterBottom>How tall are you? ({isImperial ? 'in' : 'cm'})</Typography>
                    <Box pt={4}>
                        <Slider
                            value={height}
                            onChange={(event: any, value: any) => setHeightI(value)}
                            valueLabelDisplay="on"
                            min={minHeight}
                            max={maxHeight}
                        />
                    </Box>
                </Box>

                <Box pb={4} className="calc-bmi">
                    <Typography gutterBottom>How much do you weigh? ({isImperial ? 'lb' : 'kg'})</Typography>
                    <Box pt={4}>
                        <Slider
                            value={weight}
                            onChange={(event: any, value: any) => setWeightI(value)}
                            valueLabelDisplay="on"
                            min={minWeight}
                            max={maxWeight}
                        />
                    </Box>
                </Box>
                <Box pb={4}>
                    <Typography gutterBottom>
                        How many periods did you have in the last 12 months?
          </Typography>
                    <Box pt={4}>
                        <Slider
                            value={periods}
                            onChange={(event: any, value: any) => setPeriods(value)}
                            valueLabelDisplay="on"
                            min={minPeriods}
                            max={maxPeriods} />
                    </Box>
                </Box>

                <Box pb={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            Have you ever had an ovary removed?
            </FormLabel>
                        <RadioGroup
                            name="ovary"
                            value={ovary}
                            onChange={(event: any, value: any) => {
                                setOvary(value)
                            }}
                        >
                            <FormControlLabel
                                value={'0'}
                                control={<Radio />}
                                label="Never" />
                            <FormControlLabel
                                value={'1'}
                                control={<Radio />}
                                label="Yes, one ovary"
                            />
                            <FormControlLabel
                                value={'2'}
                                control={<Radio />}
                                label="Yes, two ovaries"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box pb={4}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Do you smoke?</FormLabel>
                        <RadioGroup
                            name="smoke"
                            value={smoke}
                            onChange={(event: any, value: any) => setSmoke(value)}
                        >
                            <FormControlLabel value={'0'} control={<Radio />} label="No" />
                            <FormControlLabel value={'1'} control={<Radio />} label="Yes" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>

            <Box display="flex" justifyContent="center" m={1} p={1}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleCalculate()}
                >
                    Calculate
        </Button>
            </Box>

            <Box display="flex" justifyContent="center" m={1} p={1}>
                <IconButton component={Link} to="/about">
                    <ArrowBackIcon />
                </IconButton>
            </Box>
        </>
    );
}

export default Calculator;
