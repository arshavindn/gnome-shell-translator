/* -*- mode: js2 - indent-tabs-mode: nil - js2-basic-offset: 4 -*- */
/* jshint multistr: true */
/* jshint esnext: true */
/* global imports: true */
/* global global: true */
/* global log: true */

const Clutter = imports.gi.Clutter;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;
const St = imports.gi.St;

const Main      = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

const TranslationIndicator = Lang.class({
    Name: 'TranslationIndicator',
    Extends: PanelMenu.Button,

    destroy: function() {
        this.parent();
    },

    _init: function() {
        this.parent(0.0, "TranslationIndicator");
        hbox = St.BoxLayout();
        this._icon = new St.Icon({icon_name: 'indicator-messages'});  // translator-indicator
        hbox.add_child(this._icon);
        this.actor.add_child(hbox);
        // this._buildMenu();
    },

    // _buildMenu: function() {
    //     this.langs_choose_boxes = new St.BoxLayout();
    //     this.source_lang_combobox = new PopupMenu.PopupComboBoxMenuItem();
    //     this.lang_swap_button = new St.Button();
    //     this.target_lang_combobox = new PopupMenu.PopupComboBoxMenuItem();
    //     this.langs_choose_boxes.add_child(this.source_lang_combobox);
    //     this.langs_choose_boxes.add_child(this.lang_swap_button);
    //     this.langs_choose_boxes.add_child(this.target_lang_combobox);
    //     this.menu.addMenuItem(this.lang_choose_boxes);
    // }
});


function init(extensionMeta) {
    // let theme = imports.gi.Gtk.IconTheme.get_default();
    // theme.append_search_path(extensionMeta.path + "/icons");
}

let trans_indicator;
function enable () {
    // trans_indicator = new TranslationIndicator();
    trans_indicator = new PanelMenu.Button(0.0, "Ha", true);
    Main.panel.addToStatusArea('trans_indicator', trans_indicator);
}

function disable() {
    trans_indicator.destroy();
}
