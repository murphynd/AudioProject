<!-- To Do list
- activate volume
- activate Tone/Edit/yoursong to play the sound you saved
- update Readme
- about section
- Make home index a show hide of the tones Index.
-->

<br>
<p align="center">
  <u><big>|| <b>Auklo| C# Team Week 2020</b> ||</big></u>
</p>
<p align="center">
    <!-- Project Avatar/Logo -->
    <br>
    <a>
        <img src="https://i.redd.it/8md3avcxpe651.jpg">
    </a>
    <p align="center">
      ___________________________
    </p>
    <!-- GitHub Link -->
    <p align="center">
        <a href="https://github.com/Murphynd">
            <strong>Natalie Murphy</strong>
        </a> 
        <a href="https://github.com/GrantEadie">
            <strong>Grant Eadie</strong>
        </a> 
        <a href="https://github.com/wattsjmichael">
            <strong>Michael Watts</strong>
        </a> 
    </p>
</p>

<p align="center">
  <small>Created on November 1st, 2020.</small>
</p>

---

### <u>Table of Contents</u>

- <a href="#🌐-about-the-project">About the Project</a>
  - <a href="#📖-description">Description</a>
  - <a href="#🦠-known-bugs">Known Bugs</a>
  - <a href="#🛠-built-with">Built With</a>
  - <a href="#🔍-preview">Preview</a>
  - <a href="#🏁-getting-started">Getting Started</a>
  - <a href="#⚙️-setup-and-use">Setup and Use</a>
  - <a href="#🤝-contributors">Auxiliary</a>
  - <a href="#🤝-contributors">Contributors</a>
  - <a href="#✉️-contact-and-support">Contact</a>
  - <a href="#⚖️-license">License</a>
  - <a href="#🌟-acknowledgements">Acknowledgements</a>

---

## 🌐 About the Project

### 📖 Description

Procedurally generated ambient music maker that has an infinite timeline of sound built using C#/Javascript/MySql. Using different filters and effects, You are able to create and save your own ambient music.

"Its actually pretty easy to get some sounds coming out of a web application." - Someone on Youtube

### 🔍 Examples & Resources

- [Web Audio API from Mozilla.](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)"
- [Intro Turtorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) we build a simple [boombox](https://codepen.io/Rumyra/pen/qyMzqN/)
- [Basic Concepts](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API) behind Web Audio API
- [Form](https://css-tricks.com/form-validation-web-audio/) using WebAudio API
- [Oscillator Node](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode) > a very cool [example](http://mdn.github.io/violent-theremin/)
- [Media Element Audio Source Node](https://developer.mozilla.org/en-US/docs/Web/API/MediaElementAudioSourceNode) > example: [this is cool](https://mdn.github.io/webaudio-examples/media-source-buffer/), its moving your mouse around the screen to change things about the media playing
- [Gain Node](https://developer.mozilla.org/en-US/docs/Web/API/GainNode) > example: [voice-change](https://mdn.github.io/voice-change-o-matic/)
- [Example Repo](https://github.com/mdn/webaudio-examples/) for WebAudio

### 🦠 Known Bugs

- None known at the moment.

### 🛠 Built With

- [Visual Studio Code](https://code.visualstudio.com/)
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/)
- [ASP.NET Core MVC](https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-3.1)
- [MySQL](https://dev.mysql.com/)
- [Entity Framework Core 2.2.6](https://docs.microsoft.com/en-us/ef/core/)
- [Tone.js](https://tonejs.github.io/)

### 🔍 Preview

  <a>
        <img src="https://i.imgur.com/LEy16qB.png">
  </a>
---

## 🏁 Getting Started

#### Install .NET Core

- On macOS Mojave or later
  - [Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.106-macos-x64-installer) to download the .NET Core SDK from Microsoft Corp for macOS.
- On Windows 10 x64 or later
  - [Click here](https://dotnet.microsoft.com/download/thank-you/dotnet-sdk-2.2.203-windows-x64-installer) to download the 64-bit .NET Core SDK from Microsoft Corp for Windows.

#### Install dotnet script

Enter the command `dotnet tool install -g dotnet-script` in Terminal for macOS or PowerShell for Windows.

#### Install MySQL Workbench

[Download and install the appropriate version of MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

#### Code Editor

To view or edit the code, you will need an code editor or text editor. The popular open-source choices for an code editor are Atom and VisualStudio Code.

1. Code Editor Download:
   - Option 1: [Atom](https://nodejs.org/en/)
   - Option 2: [VisualStudio Code](https://www.npmjs.com/)
2. Click the download most applicable to your OS and system.
3. Wait for download to complete, then install -- Windows will run the setup exe and macOS will drag and drop into applications.
4. Optionally, create a [GitHub Account](https://github.com)

### ⚙️ Setup and Use

#### Cloning

1. Navigate to the [Auklo](https://github.com/murphynd/AudioProject).
2. Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
3. Open up your system Terminal or GitBash, navigate to your desktop with the command: `cd Desktop`, or whichever location suits you best.
4. Clone the repository to your desktop: `$ git clone https://github.com/murphynd/AudioProject.git`
5. Run the command `cd AudioProject` to enter into the project directory.
6. View or Edit:
   - Code Editor - Run the command `atom .` or `code .` to open the project in Atom or VisualStudio Code respectively for review and editing.
   - Text Editor - Open by double clicking on any of the files to open in a text editor.

#### Download

1. Navigate to the [Auklo](https://github.com/murphynd/AudioProject).
2. Click 'Clone or download' to reveal the HTTPS url ending with .git and the 'Download ZIP' option.
3. Click 'Download ZIP' and unextract.
4. Open by double clicking on any of the files to open in a text editor.

#### Database Settings

1. Create a new file in the AudioProject directory named `appsettings.json`
2. Add in the following code snippet to the new appsettings.json file:

```
{
  "Logging": {
      "LogLevel": {
      "Default": "Warning"
      }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
      "DefaultConnection": "Server=localhost;Port=3306;database=audio_project0;uid=root;pwd=YourPassword;"
  }
}
```

3. Change the server, port, and user id as necessary. Replace 'YourPassword' with relevant MySQL password (set at installation of MySQL).

#### Database

1. Navigate to AudioProject directory using the MacOS Terminal or Windows Powershell (e.g. `cd Desktop/ParkWatch.Solutions/AudioProject`).
2. Run the command `dotnet ef database update` to generate the database through Entity Framework Core.
3. (Optional) To update the database with any changes to the code, run the command `dotnet ef migrations add <MigrationsName>` which will use Entity Framework Core's code-first principle to generate a database update. After, run the previous command `dotnet ef database update` to update the database.

#### 🤝 Contributors

| Author                                                       |                      GitHub                       |                              Email                              |
| ------------------------------------------------------------ | :-----------------------------------------------: | :-------------------------------------------------------------: |
| [Michael Watts](https://linkedin.com/in/wattsjmichael)       | [Michael Watts](https://github.com/wattsjmichael) |    [wattsjmichael@gmail.com](mailto:wattsjmichael@gmail.com)    |  |
| [Grant Eadie](https://linkedin.com/in/granteadie)            |   [Grant Eadie](https://github.com/granteadie)    |      [grantleadie@gmail.com](mailto:grantleadie@gmail.com)      |
| [Natlie Murphy](https://linkedin.com/in/nataliedoraismurphy) |   [Natalie Murphy](https://github.com/murphynd)   | [nataliemurphy500@gmail.com](mailto:nataliemurphy500@gmail.com) |

---

### ✉️ Contact and Support

If you have any feedback or concerns, please contact one of the contributors.

---

### ⚖️ License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2020 Natalie Murphy, Grant Eadie, Michael Watts All Rights Reserved.

```

MIT License

Copyright (c) 2020 Natalie Murphy, Grant Eadie, Michael Watts

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

---

### 🌟 Acknowledgments

#### [Epicodus](https://www.epicodus.com/)

> "A school for tech careers... to help people learn the skills they need to get great jobs."

---

### 🍎 Guidance Used

[Guidance on a great API README - LondresRi](https://github.com/LondresRi)

## ‿︵‿︵‿ヽ(°□° )ノ︵‿︵‿︵

<center><a href="#">Return to Top</a></center>
```
