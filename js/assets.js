class Assets {
    static level = "tutorial";
    static inLevel = false;

    static IMAGE = ".png";
    static SOUND = ".wav";
    static OGG = ".ogg";

    constructor() {
      if (this instanceof Assets) {
        throw Error('A static class cannot be instantiated.');
      }
    }

    static folder(path)
    {
        var prefix = level;
        if (!inLevel)
            prefix = "shared";
        return $`../assets/{prefix}/{path}`;
    }

    static file(path, extension)
    {
        return this.folder(path) + extension;
    }

    static image(path) //example usage: "c64" would return "../assets/{current level or "shared"}/images/{path}.png"
    {
        return this.file("images" + path, this.IMAGE);
    }

    static skinFilter(skin) //"skinFilter" sounds really weird but all it does is just default to normal sprites if the custom ones don't.
    {
        if (!this.folderExists(this.folder($`images/player/{skin}`)))
        {
            skin = "default";
        }
        return skin;
    }

    static folderExists(folderPath)
    {
        return this.fileExists(folderPath, "");
    }

    static fileExists(filePath, fileExtension)
    {
        try {
            require('..' + filePath);
            return true;

        } catch (err) {
            return false;

        }
    }
}