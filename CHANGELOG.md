Removed "angular2-signaturepad": "^4.0.2" in order to upgrade Angular to 19
To restore it follow below steps
    * Uncomment all the files in "control-value-accessor" folder
    * Uncomment ControlValueAccessorModule in app.module.ts
    * Run below command and install the package
        * npm install angular2-signaturepad --save 
