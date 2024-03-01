import React, { Component } from 'react';
import FancyText from './FancyText';
import './VisualText.css';
import ReactECharts from 'echarts-for-react';

const mathQuestions = [
    [
        "No profit is shared among 2 business partners, Mike and Johnson in the ratio 2:5 respectively. If Johnson got $2500, how much will Mike have after spending some of his share on a shirt that costs $200?",
        "Mike and Johnson share the profit in a 2:5 ratio. If Johnson receives $2500 and Mike spends $200 on a shirt, how much will Mike have left?",
        "Two business partners, Mike and Johnson, share the profit from a business transaction in the ratio 2:5. If Johnson received $2500, how much will Mike have left after spending $200 on a shirt?",
        "Two business partners, Mike and Johnson, share the profit from a business transaction in a ratio of 2:5. If Johnson received $2500, what amount will Mike have left after spending $200 on a shirt?",
        "Two business partners, Mike and Johnson, decide to share the profit from a business transaction. The ratio of their shares is 2:5, respectively. If Johnson receives $2500, how much will Mike have remaining after he spends $200 on a shirt?",
        "800",
    ],
    [
        "In a truck, there are 26 pink hard hats, 15 green hard hats, and 24 yellow hard hats.  If Carl takes away 4 pink hard hats, and John takes away 6 pink hard hats and twice as many green hard hats as the number of pink hard hats that he removed, then calculate the total number of hard hats that remained in the truck.",
        "In a truck, there are 26 pink hard hats, 15 green hard hats, and 24 yellow hard hats. Carl takes away 4 pink hard hats, and John takes away 6 pink hats and twice as many green hats as the pink ones he removed. How many hats are left in the truck?",
        "In a truck, there are 26 pink hard hats, 15 green hard hats, and 24 yellow hard hats. Carl takes away 4 pink hard hats, and John takes away 6 pink hard hats and twice as many green hard hats as the pink ones he removed. How many hard hats are left in the truck?",
        "There are 26 pink hard hats, 15 green hard hats, and 24 yellow hard hats in a truck. Carl takes away 4 pink hard hats, and John takes away 6 pink hard hats and twice the number of green hard hats as the pink ones he removed. How many hard hats are left in the truck?",
        "A truck contains 26 pink hard hats, 15 green hard hats, and 24 yellow hard hats. Carl takes away 4 pink hard hats, while John removes 6 pink hard hats and twice the number of green hard hats as the amount of pink ones he took. Can you determine the final total number of hard hats left in the truck?",
        "43",
    ],
    [
        "Each bird eats 12 beetles per day, each snake eats 3 birds per day, and each jaguar eats 5 snakes per day. If there are 6 jaguars in a forest, how many beetles are eaten each day?",
        "In a forest, there are 6 jaguars. Each jaguar eats 5 snakes, and each snake eats 3 birds. If each bird eats 12 beetles, how many beetles are eaten in total?",
        "In a forest, there are 6 jaguars. Each jaguar eats 5 snakes per day, and each snake eats 3 birds per day. If each bird eats 12 beetles per day, how many beetles are eaten in the forest daily?",
        "There are 6 jaguars in a forest. Each jaguar consumes 5 snakes daily, and each snake eats 3 birds a day. If each bird eats 12 beetles per day, how many beetles are eaten in total every day?",
        "In a forest, there are multiple animals with specific feeding habits. Each bird has an appetite for devouring 12 beetles every day, while each snake preys upon 3 birds daily. On the other hand, each jaguar hunts and consumes 5 snakes per day. If the forest is home to 6 jaguars, can you determine the total number of beetles that get consumed each day?",
        "1080",
    ],
    [
        "There are 5 houses on a street, and each of the first four houses has 3 gnomes in the garden. If there are a total of 20 gnomes on the street, how many gnomes does the fifth house have?",
        "On a street with 5 houses, the first four houses have 3 gnomes each. If there are a total of 20 gnomes on the street, how many gnomes are in the fifth house?",
        "On a street, there are 5 houses. The first four houses have 3 gnomes each in their gardens. If there are a total of 20 gnomes on the street, how many gnomes does the fifth house have?",
        "On a street, there are 5 houses. The first four houses each have 3 gnomes in their gardens. If there is a total of 20 gnomes on the street, how many gnomes are in the fifth house?",
        "On a street, there are a total of 5 houses. The first four houses each have a beautiful garden with 3 adorable gnomes. If the entire street is home to a total of 20 gnomes, how many gnomes reside in the fifth house?",
        "8",
    ],
    [
        "To make pizza, together with other ingredients, Kimber needs 10 cups of water, 16 cups of flour, and 1/2 times as many teaspoons of salt as the number of cups of flour. Calculate the combined total number of cups of water, flour, and teaspoons of salt that she needs to make the pizza.",
        "Kimber needs 10 cups of water, 16 cups of flour, and half as much salt as the flour to make pizza. Calculate the total amount of water, flour, and salt required for the pizza.",
        "To make a pizza, Kimber needs 10 cups of water, 16 cups of flour, and half the amount of flour in teaspoons of salt. Find the total amount of water, flour, and salt she requires for the pizza.",
        "Kimber is making pizza and needs 10 cups of water, 16 cups of flour, and half the number of teaspoons of salt as the cups of flour. Determine the total amount of water, flour, and salt needed for the pizza.",
        "Kimber is getting ready to make a tasty pizza and needs a combination of ingredients. The recipe requires 10 cups of water, 16 cups of flour, and an amount of salt that is half the number of cups of flour. Your task is to determine the total quantity of water, flour, and salt needed to create the pizza.",
        "34",
    ],
    [
        "Mr. Sanchez found out that 40% of his Grade 5  students got a final grade below B. How many of his students got a final grade of B and above if he has 60 students in Grade 5?",
        "Mr. Sanchez has 60 Grade 5 students. If 40% of them received a final grade below B, how many students earned a final grade of B and above?",
        "Out of Mr. Sanchez's 60 Grade 5 students, 40% received a final grade below B. How many students earned a final grade of B or higher?",
        "Mr. Sanchez has 60 Grade 5 students. If 40% of them received a final grade below B, how many students received a final grade of B and above?",
        "Mr. Sanchez discovered that 40% of his Grade 5 students received a final grade that was less than a B. If he has a total of 60 students in Grade 5, how many of them achieved a final grade of B or higher?",
        "36",
    ],
    [
        "Five friends eat at a fast-food chain and order the following: 5 pieces of hamburger that cost $3 each; 4 sets of French fries that cost $1.20; 5 cups of soda that cost $0.5 each; and 1 platter of spaghetti that cost $2.7. How much will each of them pay if they will split the bill equally?",
        "Five friends order 5 hamburgers at $3 each, 4 sets of French fries at $1.20 each, 5 cups of soda at $0.5 each, and 1 platter of spaghetti at $2.7. If they split the bill evenly, how much does each person pay?",
        "Five friends decide to eat at a fast-food restaurant. They order 5 hamburgers for $3 each, 4 sets of French fries for $1.20 each, 5 cups of soda for $0.50 each, and 1 spaghetti platter for $2.70. If they want to split the bill equally, how much should each friend pay?",
        "Five friends go to a fast-food chain and order the following: 5 hamburgers for $3 each, 4 sets of French fries for $1.20 each, 5 cups of soda for $0.5 each, and 1 platter of spaghetti for $2.7. If they split the bill equally, how much will each friend need to pay?",
        "Five friends decide to have a meal at a fast-food chain. Their order includes 5 pieces of hamburgers, priced at $3 each; 4 sets of French fries, priced at $1.20 each; 5 cups of soda, priced at $0.5 each; and 1 platter of spaghetti, priced at $2.7. If they plan to evenly split the bill, how much will each friend need to contribute?",
        "5",
    ],
    [
        "Anna goes trick-or-treating in a subdivision where she gets 14 pieces of candy per house. Her brother Billy goes trick-or-tricking in a neighboring subdivision where he gets 11 pieces of candy per house. If the first subdivision has 60 houses and the second subdivision has 75 houses, how many more pieces of candy does Anna get?",
        "Anna gets 14 pieces of candy per house when trick-or-treating in one subdivision. Her brother Billy gets 11 pieces of candy per house when trick-or-treating in another subdivision. If Anna visits 60 houses and Billy visits 75 houses, how many more pieces of candy does Anna get?",
        "Anna goes trick-or-treating in one neighborhood and gets 14 pieces of candy per house. Her brother Billy goes trick-or-treating in another neighborhood and gets 11 pieces of candy per house. If Anna visits 60 houses and Billy visits 75 houses, how many more pieces of candy does Anna receive in total?",
        "Anna and her brother Billy go trick-or-treating in two subdivisions. Anna gets 14 pieces of candy from each house in the first subdivision, which has 60 houses. Billy gets 11 pieces of candy from each house in the second subdivision, which has 75 houses. How many more pieces of candy does Anna get compared to Billy in total?",
        "Anna and her brother Billy are going trick-or-treating in different neighborhoods. In the neighborhood where Anna goes, she receives 14 pieces of candy from each house. In contrast, in Billy's neighborhood, he receives 11 pieces of candy from each house. If Anna's neighborhood has 60 houses and Billy's neighborhood has 75 houses, how many more pieces of candy will Anna receive compared to Billy?",
        "15",
    ],
    [
        "The file, 90 megabytes in size, downloads at the rate of 5 megabytes per second for its first 60 megabytes, and then 10 megabytes per second thereafter. How long, in seconds, does it take to download entirely?",
        "A file is being downloaded. It has a size of 90 megabytes. For the first 60 megabytes, it downloads at a rate of 5 megabytes per second. After that, it downloads at a rate of 10 megabytes per second. How many seconds does it take to download the entire file?",
        "A file measuring 90 megabytes needs to be downloaded. Initially, it downloads 5 megabytes per second for the first 60 megabytes. After that, the download speed increases to 10 megabytes per second. How many seconds will it take to fully download the file?",
        "A file with a size of 90 megabytes is being downloaded. For the first 60 megabytes, the download rate is 5 megabytes per second. After that, the rate increases to 10 megabytes per second. How many seconds will it take to download the entire file?",
        "Let's consider a scenario where we have a file with a size of 90 megabytes. Initially, the file downloads at a rate of 5 megabytes per second for the first 60 megabytes. After reaching the 60 megabyte mark, the download speed increases to 10 megabytes per second. Our question is, how many seconds will it take for the entire file to finish downloading?",
        "15",
    ],
    // ... other questions
];

const scienceQuestions = [
    [
        "Michael has a pencil case made of pine wood. The surface of the pencil case scratches and dents easily. He wants to make a new pencil case that will not scratch or dent easily. Which of the following should Michael do to make a new pencil case that will not scratch or dent easily? (A) make the pencil case a different size (B) use a different material to make the pencil case (C) make the pencil case from another piece of pine wood (D) use a thicker piece of pine wood to make the pencil case",
        "How can Michael make a durable pencil case? (A) Change the size of the case (B) Use a different material (C) Use another piece of pine wood (D) Use a thicker piece of pine wood",
        "Michael has a pencil case made of pine wood that easily gets scratched and dented. He wants to make a new pencil case that won't scratch or dent easily. Which of the following should Michael do? (A) Change the size of the pencil case. (B) Use a different material for the pencil case. (C) Make the new pencil case from a different piece of pine wood. (D) Use a thicker piece of pine wood for the pencil case.",
        "Michael has a pencil case made of pine wood. The surface of the pencil case easily gets scratched and dented. He wants to create a new pencil case that doesn't have these issues. Which of the following actions should Michael take to achieve this? (A) Change the size of the pencil case. (B) Use a different material for the pencil case. (C) Craft the pencil case from a different piece of pine wood. (D) Opt for a thicker piece of pine wood for the pencil case.",
        "Michael owns a pencil case that is constructed from pine wood. However, this type of wood is easily susceptible to scratches and dents. To address this issue, Michael wants to create a new pencil case that is more resistant to these damages. Which of the following options should Michael pursue in order to achieve his goal? (A) Alter the size of the pencil case. (B) Utilize a different material to create the pencil case. (C) Craft the pencil case from an alternative piece of pine wood. (D) Use a thicker piece of pine wood to make the pencil case.",
        "B",
    ],
    [
        "A student boils 100 grams of water to form water vapor (gas). What method should the student use to determine that the mass of the water vapor is equal to 100 grams? (A) measuring the amount of water vapor (gas) in the air (B) collecting the water vapor (gas) and cooling it back to a liquid (C) weighing the beaker before and after the water is boiled (D) comparing the temperature of the boiling water to the temperature of the water vapor (gas)",
        "How can a student determine if the mass of water vapor is equal to 100 grams after boiling 100 grams of water? (A) Measure the amount of water vapor in the air. (B) Collect the water vapor and cool it back to a liquid. (C) Weigh the beaker before and after boiling the water. (D) Compare the temperature of the boiling water to the temperature of the water vapor.",
        "A student boils 100 grams of water to create water vapor. How can the student determine that the mass of the water vapor is also 100 grams? (A) Measure the amount of water vapor in the air. (B) Collect and cool the water vapor back into a liquid. (C) Weigh the beaker before and after boiling the water. (D) Compare the temperature of the boiling water to the temperature of the water vapor.",
        "A student boils 100 grams of water and it turns into water vapor (gas). How can the student determine that the mass of the water vapor is still 100 grams? (A) Measure the amount of water vapor in the air. (B) Collect the water vapor and cool it back to liquid. (C) Weigh the beaker before and after boiling the water. (D) Compare the temperature of the boiling water to the temperature of the water vapor.",
        "To determine if the mass of water vapor formed from boiling 100 grams of water is still 100 grams, which method should a student choose? (A) Measure the amount of water vapor in the air. (B) Collect the water vapor and cool it back to a liquid. (C) Weigh the beaker before and after boiling the water. (D) Compare the temperature of the boiling water to the temperature of the water vapor.",
        "B",
    ],
    [
        "Which set of descriptions correctly states the difference between a population and a community? (A) Population: one species in an area Community: one species worldwide (B) Population: organisms in a small area Community: organisms in a large area (C) Population: living parts of an area Community: living and nonliving parts of an area (D) Population: one type of organism in an area Community: many types of organisms in an area",
        "Difference between population and community? (A) Population: one species in an area Community: one species worldwide (B) Population: organisms in a small area Community: organisms in a large area (C) Population: living parts of an area Community: living and nonliving parts of an area (D) Population: one type of organism in an area Community: many types of organisms in an area.",
        "What is the correct distinction between a population and a community? (A) Population refers to one species in an area, while community refers to one species worldwide. (B) Population refers to organisms in a small area, while community refers to organisms in a large area. (C) Population refers to living parts of an area, while community refers to living and nonliving parts of an area. (D) Population refers to one type of organism in an area, while community refers to many types of organisms in an area.",
        "What is the difference between a population and a community? (A) Population: one species in an area Community: one species worldwide (B) Population: organisms in a small area Community: organisms in a large area (C) Population: living parts of an area Community: living and nonliving parts of an area (D) Population: one type of organism in an area Community: many types of organisms in an area.",
        "Can you determine which description accurately explains the difference between a population and a community? Choose the option that best defines the concepts below:(A) Population: a single species in a specific area; Community: a single species on a global scale. (B) Population: organisms in a small area; Community: organisms in a large area. (C) Population: living components of an area; Community: living and nonliving components of an area. (D) Population: one type of organism in an area; Community: multiple types of organisms in an area.",
        "D",
    ],
    [
        "Dawn brought a chocolate bar for lunch, but the chocolate melted in her backpack. Dawn wants to perform a scientific investigation to determine the reason her chocolate bar melted in her backpack. Which hypothesis should Dawn use for her investigation? (A) Chocolate will taste better when melted. (B) Chocolate will taste the same even when melted. (C) If the chocolate is broken then the chocolate will melt. (D) If heat is added to chocolate then the chocolate will melt.",
        "Dawn's chocolate melted in her backpack. She wants to investigate why. Which hypothesis should she use? (A) Melted chocolate tastes better. (B) Melted chocolate tastes the same. (C) Broken chocolate melts. (D) Heat melts chocolate.",
        "Dawn brought a chocolate bar for lunch, but it melted in her backpack. Dawn wants to investigate why this happened. Which hypothesis should she use? (A) Melted chocolate will taste better. (B) Melted chocolate will taste the same. (C) If the chocolate is broken, it will melt. (D) If heat is added to chocolate, it will melt.",
        "Dawn brought a chocolate bar for lunch, but it melted in her backpack. Dawn wants to investigate why the chocolate bar melted. Which hypothesis should Dawn use for her investigation? (A) Chocolate tastes better when melted. (B) The taste of chocolate remains the same even when melted. (C) The chocolate will melt if it is broken. (D) The chocolate will melt when exposed to heat.",
        "Dawn brought a chocolate bar as part of her lunch, but to her dismay, it melted inside her backpack. Inquisitive and ready for a scientific investigation, Dawn now needs to select a hypothesis. Which of the following hypotheses should she choose? (A) The taste of chocolate is enhanced when it is melted. (B) The taste of chocolate remains unchanged even when melted. (C) If a chocolate bar is broken, it will inevitably melt. (D) The application of heat causes chocolate to melt. Which hypothesis should Dawn investigate?",
        "D",
    ],
    // ... other questions
];

class VisualText extends Component {
    state = {
        dataset: 'math',
        questionNumber: 0,
        simplificationLevel: 1,
        textVersions: mathQuestions[0] || ["", "", "", "", ""],
        currentText: mathQuestions[0] ? mathQuestions[0][1] : "",
        original_lines: [],
        lines: [],
        key: 'math-0',
        showAnswer: false,
        chartData: null,
        highlightedBar: null,
        lexileData: {
            math: [
                [1226, 894, 1062, 1104, 977],
                [1293, 1014, 883, 818, 805],
                [1052, 1026, 841, 820, 698],
                [996, 911, 784, 795, 960],
                [1460, 1185, 1192, 1047, 1040],
                [1219, 1033, 700, 913, 694],
                [1127, 1041, 1107, 914, 918],
                [1234, 1011, 891, 998, 992],
                [1216, 1179, 912, 931, 832]
            ],
            science: [
                [892, 867, 719, 692, 696],
                [1266, 911, 788, 793, 867],
                [1812, 968, 1631, 1126, 1602],
                [654, 631, 517, 487, 414]
            ],
        },
    };
    orig_ref = React.createRef();

    highlightBar(level) {
        this.setState({ highlightedBar: level }, () => {
            this.updateChartDataWithHighlight(level);
        });
    };

    updateChartDataWithHighlight(level) {
        const dataset = this.state.dataset;
        const questionNumber = this.state.questionNumber;
        const chartData = this.getChartData(dataset, questionNumber);

        // Apply emphasis style to the highlighted bar
        chartData.series[0].data = chartData.series[0].data.map((value, index) => ({
            value,
            itemStyle: index === level ? {
                normal: { color: '#0F52BA', borderColor: '#ADD8E6' },
                emphasis: { color: '#0F52BA' }
            } : {},
        }));

        this.setState({ chartData });
    };

    getChartData(dataset, questionNumber) {
        const data = this.state.lexileData[dataset][questionNumber] || [];

        return {
            grid: {
                left: '10%',
                right: '10%',
                bottom: '15%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Original', 'Target 1200', 'Target 900', 'Target 700', 'Minimal Lexile'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    },
                    symbol: ['none', 'arrow'], // Add arrow symbol at the end
                    symbolSize: [7, 10] // Adjust arrow size
                },
                axisTick: {
                    show: false // Hide axis ticks
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white',
                        fontSize: 12
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'Lexile',
                nameLocation: 'middle', // Adjust location of the axis name
                nameTextStyle: {
                    color: 'white',
                    fontSize: 12,
                    padding: [0, 0, 20, -40] // Adjust padding to move name to left
                },
                nameGap: 50, // Distance between axis name and axis line
                splitLine: { show: true }, // Hide split lines
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'white'
                    },
                    symbol: ['none', 'arrow'], // Add arrow symbol at the end
                    symbolSize: [7, 10] // Adjust arrow size
                },
                axisTick: {
                    show: true // Hide axis ticks
                }
            },
            series: [{
                data,
                type: 'bar',
                barWidth: '50%',

            }],

        };
    };

    toggleAnswer = () => {
        this.setState(prevState => ({
            showAnswer: !prevState.showAnswer
        }), () => {

            const answerControl = document.querySelector('.answer-control');
            if (this.state.showAnswer) {
                answerControl.classList.add('show');
            } else {
                answerControl.classList.remove('show');
            }
        });
    };

    componentDidMount() {

        this.setInitialText();
        this.setChartData(this.state.dataset, this.state.questionNumber);
    }

    setChartData(dataset, questionNumber) {
        const chartData = this.getChartData(dataset, questionNumber);
        this.setState({ chartData });
    }

    setInitialText = () => {
        const { textVersions, simplificationLevel } = this.state;
        this.setState({
            currentText: textVersions[simplificationLevel],
            original_lines: this.splitTextIntoLines(textVersions[0], 100),
            lines: this.splitTextIntoLines(textVersions[simplificationLevel], 100)
        });
    }

    handleDatasetChange = (event) => {
        const dataset = event.target.value;
        const textVersions = dataset === 'math' ? mathQuestions : scienceQuestions;
        const questionNumber = this.state.questionNumber;
        const validIndex = questionNumber < textVersions.length ? questionNumber : 0;

        this.setState({
            dataset: dataset,
            questionNumber: validIndex,
            textVersions: textVersions[validIndex] || ["", "", "", "", ""],
            currentText: textVersions[validIndex][1] || "",
            original_lines: this.splitTextIntoLines(textVersions[validIndex][0] || "", 100),
            lines: this.splitTextIntoLines(textVersions[validIndex][1] || "", 100),
            key: `${dataset}-${validIndex}`,
            simplificationLevel: 1,
            chartData: this.getChartData(dataset, validIndex),
        });
    };

    handleQuestionChange = (event) => {
        const questionNumber = parseInt(event.target.value, 10);
        const dataset = this.state.dataset;
        const textVersions = dataset === 'math' ? mathQuestions : scienceQuestions;
        const validIndex = questionNumber > 0 && questionNumber < textVersions.length ? questionNumber : 1;

        this.setState({
            questionNumber: validIndex,
            textVersions: textVersions[validIndex] || ["", "", "", "", ""],
            currentText: textVersions[validIndex][1] || "",
            original_lines: this.splitTextIntoLines(textVersions[validIndex][0] || "", 100),
            lines: this.splitTextIntoLines(textVersions[validIndex][1] || "", 100),
            key: `${dataset}-${validIndex}`,
            simplificationLevel: 1,
            chartData: this.getChartData(dataset, validIndex),
        });
    };

    handleSliderChange = (event) => {
        const level = parseInt(event.target.value, 10);
        this.updateText(level);
    };

    updateText = (level) => {
        const newText = this.state.textVersions[level] || "";
        this.setState({
            simplificationLevel: level,
            currentText: newText,
            original_lines: this.splitTextIntoLines(this.state.textVersions[0], 100),
            lines: this.splitTextIntoLines(newText, 100)
        });
    };

    setSimplificationLevel = (level) => {
        this.updateText(level);
    };

    splitTextIntoLines(text, maxLineWidth) {
        const words = text.split(/\s+/);
        const lines = [];
        let currentLine = words.shift();

        words.forEach(word => {
            if (/\([ABCD]\)/.test(word)) {

                if (currentLine.length > 0) {
                    lines.push(currentLine);
                }
                currentLine = word;
            } else {
                const newLine = currentLine.length > 0 ? `${currentLine} ${word}` : word;
                if (newLine.length > maxLineWidth) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = newLine;
                }
            }
        });

        if (currentLine.length > 0) {
            lines.push(currentLine);
        }

        return lines;
    }

    render() {
        const { original_lines, lines, simplificationLevel, dataset, questionNumber, resetAnimationKey, showAnswer } = this.state;

        const answer = this.state.textVersions[5];

        const viewBoxWidth = 1000; // 0.8 * window.innerWidth; //1000; 
        const viewBoxHeight = 500; //original_lines.length * viewBoxWidth * 0.2; // viewBoxWidth; //500;

        const xCenter = 0;
        const yStart = 0.1 * window.innerHeight;
        const lineHeight = 40;


        return (
            <div className="container">
                <div className="selectors">
                    <select value={dataset} onChange={this.handleDatasetChange}>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                    </select>
                    <select value={questionNumber} onChange={this.handleQuestionChange}>
                        {Array.from({ length: this.state.dataset === 'math' ? mathQuestions.length : scienceQuestions.length }).map((_, index) => (
                            <option key={index} value={index}>Question {index + 1}</option>
                        ))}
                    </select>
                </div>
                <button className="back-button" onClick={this.props.previousPage}>Back</button>
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + "/banner_edai_logo.png"} alt="banner" />
                </div>
                <svg
                    className="text-container"
                    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {original_lines.map((line, index) => (
                        <FancyText
                            key={`${this.state.key}-${resetAnimationKey}-${index}`}
                            x={xCenter}
                            y={yStart + index * lineHeight}
                            text={line}
                            textAnchor="middle"
                        />
                    ))}
                </svg>
                <text
                    x={0}
                    y={viewBoxHeight} //lineHeight}
                    style={{
                        fillOpacity: 0.5,
                        fill: "yellow",
                        font: "14px monospace"
                    }}
                >
                    Simplified:</text>
                <svg
                    className="text-container"
                    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {lines.map((line, index) => (
                        <FancyText
                            key={`${this.state.key}-${resetAnimationKey}-${index}`}
                            x={xCenter}
                            y={yStart + index * lineHeight}
                            text={line}
                            textAnchor="middle"
                        />
                    ))}
                </svg>
                <div className="visual">
                    <div className="left">
                        <div className={`answer-control ${showAnswer ? 'show' : ''}`}>
                            <button onClick={this.toggleAnswer} className="answer-toggle">
                                {showAnswer ? "Hide Answer" : "View Answer"}
                            </button>
                            <div className="answer-text">
                                {showAnswer ? answer : ''}
                            </div>
                        </div>
                        <div className="button-container">
                            <button onClick={() => { this.highlightBar(0); this.setSimplificationLevel(0) }} className={`button ${simplificationLevel === 0 ? 'active' : ''}`}>Original</button>
                            <button onClick={() => { this.highlightBar(1); this.setSimplificationLevel(4) }} className={`button ${simplificationLevel === 4 ? 'active' : ''}`}>Target Lexile 1200</button>
                            <button onClick={() => { this.highlightBar(2); this.setSimplificationLevel(3) }} className={`button ${simplificationLevel === 3 ? 'active' : ''}`}>Target Lexile 900</button>
                            <button onClick={() => { this.highlightBar(3); this.setSimplificationLevel(2) }} className={`button ${simplificationLevel === 2 ? 'active' : ''}`}>Target Lexile 700</button>
                            <button onClick={() => { this.highlightBar(4); this.setSimplificationLevel(1) }} className={`button ${simplificationLevel === 1 ? 'active' : ''}`}>Minimally Simplified</button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="chart-container">
                            {this.state.chartData && <ReactECharts option={this.state.chartData} />}
                        </div>
                    </div>
                </div>
                <a href="https://forms.gle/Ud8qdSxiUw5quTBQA" className="survey-link">Take our survey</a>
                <div className="info-button" onClick={this.props.nextPage}>Read about our method.</div>
            </div>
        );
    }
}

export default VisualText;
