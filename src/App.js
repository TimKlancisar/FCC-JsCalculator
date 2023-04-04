import React from 'react';
import './App.css';
import { FaFreeCodeCamp } from 'react-icons/fa';

function App() {
  return (
    <div class="calculator">
        <span class="title"><FaFreeCodeCamp /> Calculator</span>
        <div id="display">0</div>
        <ul class="keyboard">
            <li id="clear"><button>C</button></li>
            <li id='delete'><button>DEL</button></li>
            <li id="devide"><button>/</button></li>
            <li id="multiply"><button>*</button></li>
            <li id="seven"><button>7</button></li>
            <li id="eigth"><button>8</button></li>
            <li id="nine"><button>9</button></li>
            <li id="substract"><button>-</button></li>
            <li id="four"><button>4</button></li>
            <li id="five"><button>5</button></li>
            <li id="six"><button>6</button></li>
            <li id="add"><button>+</button></li>
            <li id="one"><button>1</button></li>
            <li id="two"><button>2</button></li>
            <li id="tree"><button >3</button></li>
            <li id="equals" class="tall-btn"><button>=</button></li>
            <li id="zero" class="wide-btn"><button>0</button></li>
            <li id='decimal'><button>.</button></li>
        </ul>
    </div>
  );
}

export default App;
