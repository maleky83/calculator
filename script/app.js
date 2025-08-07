    let powFlag = false;

    function insert(val) {
      const input = document.getElementById("displayResult");
      input.value += val;

      if (powFlag) {
        const parts = input.value.split("^");
        if (parts.length === 2) {
          input.value = Math.pow(parseFloat(parts[0]), parseFloat(parts[1]));
          powFlag = false;
        }
      }
    }

    function clearDisplay() {
      document.getElementById("displayResult").value = "";
    }

    function calculate() {
      try {
        const result = eval(document.getElementById("displayResult").value);
        document.getElementById("displayResult").value = result;
      } catch (e) {
        alert("Invalid expression");
      }
    }

    function mathFn(fn) {
      const input = document.getElementById("displayResult");
      let val = parseFloat(input.value);
      if (isNaN(val)) return;

      switch (fn) {
        case "abs":
          input.value = Math.abs(val);
          break;
        case "ceil":
          input.value = Math.ceil(val);
          break;
        case "floor":
          input.value = Math.floor(val);
          break;
        case "round":
          input.value = Math.round(val);
          break;
        case "sqrt":
          input.value = Math.sqrt(val);
          break;
        case "pow":
          powFlag = true;
          input.value += "^";
          break;
      }
    }
