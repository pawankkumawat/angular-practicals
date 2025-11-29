// The Mark IV Special Coffee Maker The Mark IV Special makes up to 12 cups of coffee at a time.
//  The user places a filter in the filter holder, fills the filter with coffee grounds, and slides the filter holder into its receptacle.
//  The user then pours up to 12 cups of water into the water strainer and presses the Brew button.
//  The water is heated until boiling. 
// The pressure of the evolving steam forces the water to be sprayed over the coffee grounds, and coffee drips through the filter into the pot.
//  The pot is kept warm for extended periods by a warmer plate,
//  which only turns on if there is coffee in the pot. 
// If the pot is removed from the warmer plate while water is being sprayed over the grounds, 
// the flow of water is stopped so that brewed coffee does not spill on the warmer plate 
// Hardware Interface • The heating element for the boiler. It can be turned on or off. 
// • The heating element for the warmer plate. It can be turned on or off. 
// • The sensor for the warmer plate. It has three states: warmerEmpty, potEmpty, potNotEmpty. 
// • A sensor for the boiler, which determines whether there is water present. It has two states: boilerEmpty or boilerNotEmpty. 
// • The Brew button. This is a momentary button that starts the brewing cycle. 
// It has an indicator that lights up when the brewing cycle is over and the coffee is ready. 
// • A pressure-relief valve that opens to reduce the pressure in the boiler. 
// The drop in pressure stops the flow of water to the filter. It can be opened or closed. 



// CoffeeMaker
// BrewButton
// BoilerHeater -on off
// WarmerPlateHeater - on off
// warmerPlateSensor -warmerEmpty, potempty, potnotempty
// BoilerSensor - BoilerEmpty, BoilerNotEmpty


export interface ICoffeeState {
    
}


export class CoffeeMaker {
    private brewButton: BrewButton;
    private boilerHeater: BoilerHeater;
    private warmerPlateHeater: WarmerPlateHeater;
    private warmerPlateSensor: WarmerPlateSensor;
    private boilerSensor: BoilerSensor;

    constructor() {
        this.brewButton = new BrewButton();
        this.boilerHeater = new BoilerHeater();
        this.warmerPlateHeater = new WarmerPlateHeater();
        this.warmerPlateSensor = new WarmerPlateSensor();
        this.boilerSensor = new BoilerSensor();
    }

    startBrewing() {
        this.brewButton.press();
    }

    // Add methods to control the coffee maker
}

export class BrewButton {
    private isPressed: boolean = false;
    private isBrewing: boolean = false;
    private isBrewingDone: boolean = false;
    private isBrewingDoneIndicator: boolean = false;
    private isBrewingDoneIndicatorOn: boolean = false;
    private isBrewingDoneIndicatorOff: boolean = false;
    press() {
        this.isPressed = true;
        console.log('Brew button pressed');
    }
}
export class BoilerSensor  {
    private state: string = 'boilerEmpty';

    setState(state: string) {
        this.state = state;
        console.log(`Boiler sensor state is ${this.state}`);
    }

    getState(): string {
        return this.state;
    }
}

export class BoilerHeater {
    private isOn: boolean = false;

    turnOn() {
        this.isOn = true;
        console.log('Boiler heater is ON');
    }

    turnOff() {
        this.isOn = false;
        console.log('Boiler heater is OFF');
    }

    isHeaterOn(): boolean {
        return this.isOn;
    }
}

export class WarmerPlateHeater {
    private isOn: boolean = false;

    turnOn() {
        this.isOn = true;
        console.log('Warmer plate heater is ON');
    }

    turnOff() {
        this.isOn = false;
        console.log('Warmer plate heater is OFF');
    }

    isHeaterOn(): boolean {
        return this.isOn;
    }
}


export class WarmerPlateSensor {
    private state: string = 'warmerEmpty';

    setState(state: string) {
        this.state = state;
        console.log(`Warmer plate sensor state is ${this.state}`);
    }

    getState(): string {
        return this.state;
    }
}

