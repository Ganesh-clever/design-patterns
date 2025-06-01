class Button{
    render(){}
}

class CheckBox {
    render(){}
}

class LightThemeButton extends Button{
    render(){
        console.log('Called from light theme button');
    }
}

class LightThemeCheckBox extends CheckBox {
    render(){
        console.log('Called from light theme checkbox');
    }
}

class DarkThemeButton extends Button{
    render(){
        console.log('Called from dark theme button');
    }
}

class DarkThemeCheckBox extends CheckBox {
    render(){
        console.log('Called from dark theme checkbox');
    }
}

class UIFactory{
    createButton(){}
    createCheckbox(){}
}

class LightUIFactory extends UIFactory{
    createButton(){
       return new LightThemeButton;
    }

    createCheckbox(){
        return new LightThemeCheckBox();
    }
}

class DarkUIFactory extends UIFactory{
    createButton(){
        return new DarkThemeButton();
    }

    createCheckbox(){
        return new DarkThemeCheckBox()
    }
}

function UIRender(theme){
   const button = theme.createButton();
   const checkBox = theme.createCheckbox();

   button.render();
   checkBox.render();

}

const LF = new LightUIFactory();
const DF = new DarkUIFactory();

UIRender(LF);
UIRender(DF)

