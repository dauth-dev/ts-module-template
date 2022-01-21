# Typescript Module Playground

Beispielprojekt zur Verwendung von Typescript in ECMA Script Modulen in Browsern ohne Bundler

## Start

```
npm install

npm run build

npm run serve

```


## Vorgehen

Alle Abhängigkeiten werden über einen relativen Pfad geladen. Dh. auch 3rd Party Abhängigkeiten aus dem node_modules Verzeichniss müssen relativ geladen werden.
Siehe dazu z.B. src/parts/Part1.ts:
```
import theAnswer from "../../node_modules/the-answer/dist/the-answer.es.js";
```

In der html Datei wird der Einstiegspunkt zu den Javascriptdateien ganz normal über einen script Tag definiert. Wichtig ist hier die Angabe von **type="module"** :
```
  <script src="dist/index.js" type="module"></script>
```


## Typescript Typen
Da nicht bei allen Abhängigkeiten eine Typedeklaration hinterlegt ist muss diese evtl. selber erstellt werden.
Auch bei TheAnswer ist dies der Fall. Die Typdeklaration für diesen Fall ist unter **src/types/the-answer/index.d.ts** hinterlegt.  

Die Deklarationsdatei *.d.ts kann mitlerweile überall im Projektverzeichniss abgelegt werden. Früher benötigte man die korrekte Konfiguration des typeRoots Settings in der tsconfig.json.

Als Konvention hat es sich etabliert die Deklarationsdateien innerhalb einer bestimmten Verzeichnissstruktur **pfad/types/PackageName/index.d.ts** abzulegen.