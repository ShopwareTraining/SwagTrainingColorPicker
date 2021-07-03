import Plugin from 'src/plugin-system/plugin.class';
import ColorPicker from 'simple-color-picker';

export default class SwagExampleColorPicker extends Plugin {
    init() {
        console.log('Color option', this.options.color);
        const colorPicker = new ColorPicker();
        colorPicker.appendTo(this.el);

        if (this.options.color) {
            colorPicker.setColor(this.options.color);
        }
    }
}
