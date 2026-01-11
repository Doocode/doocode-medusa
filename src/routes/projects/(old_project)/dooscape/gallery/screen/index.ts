import type { GalleryItemContent } from '$lib/gallery';

import about_pane from './dooscape_about_pane.png';
import address_pane from './dooscape_address_pane.png';
import all_actions from './dooscape_all_actions.png';
import browsing from './dooscape_browsing.png';
import lock_screen from './dooscape_lock_screen.png';
import main_menu from './dooscape_main_menu.png';
import reading_list from './dooscape_reading_list.png';
import screenshot from './dooscape_screenshot.png';
import settings_customize from './dooscape_settings_customize.png';
import settings_ui from './dooscape_settings_ui.png';
import tabs from './dooscape_tabs.png';

export const screens: GalleryItemContent[] = [
    {
        src: browsing,
        alt: "Browsing",
    },
    {
        src: tabs,
        alt: "Tabs",
    },
    {
        src: main_menu,
        alt: "Main menu",
    },
    {
        src: all_actions,
        alt: "All actions",
    },
    {
        src: about_pane,
        alt: "About pane",
    },
    {
        src: address_pane,
        alt: "Address pane",
    },
    {
        src: lock_screen,
        alt: "Lock screen",
    },
    {
        src: reading_list,
        alt: "Reading list",
    },
    {
        src: screenshot,
        alt: "Screenshot",
    },
    {
        src: settings_customize,
        alt: "Settings - Customize",
    },
    {
        src: settings_ui,
        alt: "Settings - User Interface",
    },
];