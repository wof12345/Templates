#include <LiquidCrystal.h>
LiquidCrystal lcd(2,3,4,5,6,7);
int tempPin = A0; 
int fan = 11; 
int led = 8; 
int MsensorPin = 10;
int temp;
int MsensorRead;
int tempMin = 30; 
int tempMax = 60; 
int fanSpeed;
int fanLCD;
bool entered =false;
 
void setup() {
pinMode(fan, OUTPUT);
pinMode(led, OUTPUT);
pinMode(tempPin, INPUT);
pinMode(MsensorPin, INPUT);
lcd.begin(16,2);
Serial.begin(9600);
}
 
void loop()
{
MsensorRead = getMotion();
Serial.print(MsensorRead);

if(MsensorRead){
    entered = !entered;
}else{
    
}
  
if(entered){
temp = readTemp(); 
// Serial.print( temp );
if(temp < tempMin) 
{
fanSpeed = 0; 
analogWrite(fan, fanSpeed);
fanLCD=0;
digitalWrite(fan, LOW);
}

if((temp >= tempMin) && (temp <= tempMax)) 
{
fanSpeed = temp;
fanSpeed=1.5*fanSpeed;
fanLCD = map(temp, tempMin, tempMax, 0, 100); 
analogWrite(fan, fanSpeed); 
}
 
if(temp > tempMax) 
{
digitalWrite(led, HIGH); 
}
else 
{
digitalWrite(led, LOW);
}
 
lcd.print("TEMP: ");
lcd.print(temp); 
lcd.print("C ");
lcd.setCursor(0,1); 
lcd.print("FANS: ");
lcd.print(fanLCD); 
lcd.print("%");
}else{
    lcd.print("No motion detected!"); 
}
  
delay(2000);
lcd.clear();
}
 
int readTemp() { 
temp = analogRead(tempPin);
return temp * 0.48828125;
}

int getMotion(){
return digitalRead(MsensorPin);
}