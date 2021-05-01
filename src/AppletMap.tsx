interface AppletEntry {
    name: string
    displayName: string
    component?: React.Component
    version: string
    description: string
    creationDate: Date
}

const appletMap: Map<string, AppletEntry> = new Map([
    ["sample_applet", {
        name: "sample_applet",
        displayName: "Sample Applet",
        version: "v1.0",
        description: "This is not a real Applet. It is a sample.",
        creationDate: new Date("April 30, 2021 21:44:00"),
    }]
]);

export default appletMap;