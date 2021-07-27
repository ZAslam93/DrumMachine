// Borrowing sound library from the FCC example
// https://codepen.io/freeCodeCamp/full/MJyNMd
const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  
  const DrumPad = (props) => { 
    return (
    <button id={props.id} className="drum-pad btn btn-secondary m-4" onClick={props.HC} value={props.name}>{props.name}
      <audio className = "clip" src={props.url} id={props.name}/>
    </button>)
  }
  
  
  class App extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        soundText: "Play a sound",
      }
      // Bind this
      this.handleClick = this.handleClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Methods and things
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress)
  
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress)
    }
    handleClick(e) {
      console.log(e.target.value);
      var soundClip = document.getElementById(e.target.value);
      var soundName;
      console.log(soundClip);
      soundClip.play();
      bankOne.forEach((clip) => {
        if(clip.keyTrigger == e.target.value) {
          soundName = clip.id;
          console.log(soundName);
        };
      })
      this.setState({soundText: soundName})
    };
    
    handleKeyPress(e) {
      console.log(e.keyCode);
      var codeMatch;
      var soundName2;
      bankOne.forEach((clip) => {
        if (e.keyCode == clip.keyCode) {
          codeMatch = clip.keyTrigger;
          console.log(codeMatch);
          var soundClip2 = document.getElementById(codeMatch);
          soundName2 = clip.id;
          soundClip2.play();
        }
      })
      if (soundName2) {
        this.setState({soundText: soundName2});
      }
    }
    render() {
      return (
      <div id="drum-machine" className="container">
          <div id="display" className="well text-center">
            <h2 className="text-center">Drum Machine</h2>
            <h4 className="text-center text-danger">{this.state.soundText}</h4>
          {bankOne.map((sound) => 
             <DrumPad 
               id={sound.id}
               name={sound.keyTrigger}
               url={sound.url}
               HC={this.handleClick}
             />         
               )}
          </div>
      </div>)
    }
  }
  ReactDOM.render(<App/>, document.getElementById("app"))