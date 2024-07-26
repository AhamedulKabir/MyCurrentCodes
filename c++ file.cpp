// #include<iostream>
// using namespace std;

// void line(), massage();

// int main()
// {
//     cout<< "Hello, the program starts in main()."<<endl;
//     line();
//     massage();
//     line();
//     cout<< "At the end of the main()."<<endl;
//     return 0;
// }
// void line()
// {
//     cout<< "---------" << endl;
// }

// void massag e()
// {
//     cout<< "In function massage()" <<endl;
// }


// Addition of two numbers
// #include<iostream>

// using namespace std;
// int main(){
//     int sum(int, int);
//     int x,y,z;
//     cout<<"\n Enter tow numbers ";
//     cin >> x >> y;
//     z = sum(x , y);
//     cout<<"\n Addition of "<< x <<" and " << " is "<< z;
// }
// int sum(int p, int q){
//     int r;
//     r= p + q;
//     return r;
// }


// #include <iostream>

// using namespace std;

// int sum(int a, int b) {
//     return a + b;
// }

// int main() {
//     int x, y, z;

//     cout << "Enter two numbers: ";
//     cin >> x >> y;

//     z = sum(x, y);

//     cout << "Addition of " << x << " and " << y << " is " << z << endl;

//     return 0;
// }


// #include <iostream>
// using namespace std;

// int getInput() {
//     int num;
//     cout << "Enter a number: ";
//     cin >> num;
//     return num;
// }

// int calculateSum(int a, int b) {
//     return a + b;
// }

// void displayResult(int result) {
//     cout << "The sum is: " << result << endl;
// }

// int main() {
//     int num1 = getInput();
//     int num2 = getInput();
//     int sum = calculateSum(num1, num2);
//     displayResult(sum);
//     return 0;
// }

// #include<iostream>
// #include<limits>
// using namespace std;

// int getInput(){
//     int num;
//     while(!(cin>> num)){
//         cin.clear();
//         cin.ignore
//         (numeric_limits<streamsize>::max(),
//         '\n');
//         cout<< "Invalid input. Please enter a number : ";
//     }
//     return num;
// }

// int calculateSum(int a, int b){
//     return a + b;
// }

// void displayResult(int result){
//     cout<< "The sum is : "<< result << endl;
// }

// int main(){
//     int num1 = getInput();
//     int num2 = getInput();
//     int sum = calculateSum(num1, num2);
//     displayResult(sum);
//     return 0;
// }

// #include<iostream>
// using namespace std;

// void pause();

// int main(){
//     cout<< endl << "Dear reader, "
//         << endl << "have a";
//     pause();
//     cout<< " ! " << endl;
//     return 0; 
// }

// void pause(){
//     cout<< "BREAK";
// }


// #include<iostream>
// using namespace std;

// void yes(){
//     cout<< "Oh yes";
// }

// int main(){
//     cout<< "oh  what "<< endl;
//     cout << "a happy day";
//     cout<< "!" << endl;
//     yes();
//     cout<< "," << endl;
//     cout << "what a happy day";
//     cout<< "!" << endl;
//     return 0;
// }

// #include<iostream>

// using namespace std;
// int main(){

// cout<< "If this text",
// cout<< "appears on your display, ";//operator is not right
// cout<< " "<< endl;//endl is not rightly placed
// cout<< "'you can pat yourself on'";//semicolon
// cout<<" the back!" <<endl;// semicolon instead of Full stop
// return 0;
// }


// #include <iostream>
// #include <climits>

// using namespace std;

// int main() {
//     cout << "Range of types int and unsigned int" << endl << endl;
//     cout << "Type\t\tMinimum\t\tMaximum" << endl << "------------------------------------------" << endl;

//     cout << "int\t\t" << INT_MIN << "\t\t" << INT_MAX << endl;
//     cout << "unsigned int\t" << 0 << "\t\t" << UINT_MAX << endl;
//     return 0;
// }


// #include<iostream>
// #include<climits>
// using namespace std;

// int main(){
//     cout<< "Range of types int and unsigned int"<< endl<<endl;
//     cout<< "Type           Minimum          Maximum"<< endl <<"------------------------------------------"<<endl;

//     cout<< "int                "<< INT_MIN<< "---------"<< INT_MAX<< endl;
//     cout<<" unsigned int" <<  "  0  "  << UNIT_MAX << endl;
//     return 0;
// }


// #include <iostream>

// int main() {
//     // Boolean constants
//     const bool is_true = true;
//     const bool is_false = false;

//     // Using boolean constants in conditional statements
//     if (is_true) {
//         std::cout << "The value is true" << std::endl;
//     }

//     if (!is_false) {
//         std::cout << "The value is not false" << std::endl;
//     }

//     return 0;
// }


// #include <iostream>

// bool is_even(int number) {
//     const bool is_even_number = (number % 2) == 0;
//     return is_even_number;
// }

// int main() {
//     int num = 4;
//     if (is_even(num)) {
//         std::cout << num << " is even" << std::endl;
//     } else {
//         std::cout << num << " is odd" << std::endl;
//     }
//     return 0;
// }

// Numerical Constants
// #include <iostream>

// constexpr double gravity = 9.81;

// int main() {
//     std::cout << "Acceleration due to gravity: " << gravity << std::endl;
//     return 0;
// }

// Using a Function to Calculate the Area of a Triangle
// #include <iostream>
// #include <cmath>

// using namespace std;

// double calculate_triangle_area(double base, double height) {
//     return 0.5 * base * height;
// }

// int main() {
//     double base, height, area;

//     cout << "Enter the base of the triangle: ";
//     cin >> base;

//     cout << "Enter the height of the triangle: ";
//     cin >> height;

//     area = calculate_triangle_area(base, height);

//     cout << "The area of the triangle is: " << area << endl;

//     return 0;
// }


// Character Classification
// #include <iostream>
// #include <cctype>

// bool is_vowel(char ch) {
//     ch = tolower(ch); // Convert to lowercase for easier comparison
//     return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u';
// }

// int main() {
//     char character;
//     std::cout << "Enter a character: ";
//     std::cin >> character;

//     if (is_vowel(character)) {
//         std::cout << character << " is a vowel." << std::endl;
//     } else {
//         std::cout << character << " is not a vowel." << std::endl;
//     }

//     return 0;
// }

// Character Conversion
// #include <iostream>
// #include <cctype>

// char to_upper(char ch) {
//     return toupper(ch);
// }

// int main() {
//     char character;
//     std::cout << "Enter a character: ";
//     std::cin >> character;

//     char upper_case = to_upper(character);
//     std::cout << "Uppercase: " << upper_case << std::endl;

//     return 0;
// }

// Both uppercase and lowercase characters, providing the correct conversion
// #include <iostream>
// #include <cctype>

// char convert_case(char ch) {
//     if (isupper(ch)) {
//         return tolower(ch);
//     } else if (islower(ch)) {
//         return toupper(ch);
//     } else {
//         return ch; // Return the character as it is if it's not a letter
//     }
// }

// int main() {
//     char character;
//     std::cout << "Enter a character: ";
//     std::cin >> character;

//     char converted_char = convert_case(character);
//     std::cout << "Converted character: " << converted_char << std::endl;

//     return 0;
// }


// Character Manipulation
// #include<iostream>
// using namespace std;

// char next_character(char ch){
//     return static_cast<char>(ch + 1);
// }

// char prev_character(char ch){
//     return static_cast<char>(ch-1);
// }

// int main(){
//     char character;
//     std:: cout<< "Enter a character: ";
//     std:: cin>> character;

//     char next_char = next_character(character);
//     std:: cout<< "The next character is: "<< next_char << std:: endl;

//     char prev_char = prev_character(character);
//     std:: cout<< "The previous character is: "<<prev_char << std::endl;

//     return 0;
// }


// #include <iostream>
// #include <cctype>

// using namespace std;

// char next_character(char ch) {
//     if (ch == 'z') {
//         return 'a';
//     } else if (ch == 'Z') {
//         return 'A';
//     } else {
//         return static_cast<char>(ch + 1);
//     }
// }

// char prev_character(char ch) {
//     if (ch == 'a') {
//         return 'z';
//     } else if (ch == 'A') {
//         return 'Z';
//     } else {
//         return static_cast<char>(ch - 1);
//     }
// }

// int main() {
//     char character;
//     std::cout << "Enter a character: ";
//     std::cin >> character;

//     char next_char = next_character(character);
//     std::cout << "The next character is: " << next_char << std::endl;

//     char prev_char = prev_character(character);
//     std::cout << "The previous character is: " << prev_char << std::endl;

//     return 0;
// }

// String Constant
// #include <iostream>
// #include <string>

// int string_length(const std::string& str) {
//     return str.length();
// }

// int main() {
//     std::string my_string = "Hello";
//     int length = string_length(my_string);
//     std::cout << "Length of the string: " << length << std::endl;
//     return 0;
// }


// String Length
// #include <iostream>
// #include <string>

// int string_length(const std::string& str) {
//     return str.length();
// }

// int main() {
//     std::string my_string = "Hello";
//     int length = string_length(my_string);
//     std::cout << "Length of the string: " << length << std::endl;
//     return 0;
// }


// String Concatenation:
// #include <iostream>
// #include <string>

// std::string concatenate_strings(const std::string& str1, const std::string& str2) {
//     return str1 + str2;
// }

// int main() {
//     std::string str1 = "Hello";
//     std::string str2 = " world";
//     std::string result = concatenate_strings(str1, str2);
//     std::cout << result << std::endl;
//     return 0;
// }


// String Comparison
// #include <iostream>
// #include <string>

// bool is_equal(const std::string& str1, const std::string& str2) {
//     return str1 == str2;
// }

// int main() {
//     std::string str1 = "hello";
//     std::string str2 = "hello";
//     bool result = is_equal(str1, str2);
//     std::cout << "Strings are equal: " << std::boolalpha << result << std::endl;
//     return 0;
// }


// Area of a Circle
// #include <iostream>
// #include <cmath>

// using namespace std;

// const double pi = 3.14159; // Constant for pi

// double calculate_circle_area(double radius) {
//     return pi * radius * radius;
// }

// int main() {
//     double radius;
//     cout << "Enter the radius of the circle: ";
//     cin >> radius;

//     double area = calculate_circle_area(radius);
//     cout << "The area of the circle is: " << area << endl;

//     return 0;
// }


// Factorial Calculation
// #include <iostream>

// using namespace std;

// int factorial(int n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// int main() {
//     int number;
//     cout << "Enter a non-negative integer: ";
//     cin >> number;

//     int result = factorial(number);
//     cout << "Factorial of " << number << " is: " << result << endl;

//     return 0;
// }

// Constant Object 
// #include <iostream>

// class Circle {
// public:
//     Circle(double radius) : radius_(radius) {}

//     double get_area() const {
//         return 3.14159 * radius_ * radius_;
//     }

// private:
//     double radius_;
// };

// int main() {
//     const Circle c(5.0); // Constant object
//     double area = c.get_area(); // Valid call to const member function
//     // c.radius_ = 10.0; // Error: Cannot modify a constant object
//     std::cout << "Area of the circle: " << area << std::endl;
//     return 0;
// }


#include <iostream>

using namespace std;

class Circle {
public:
    Circle(double radius) : radius_(radius) {}

    double get_area() const {
        return 3.14159 * radius_ * radius_;
    }

private:
    double radius_;
};

int main() {
    double radius;
    cout << "Enter the radius of the circle: ";
    cin >> radius;

    Circle c(radius);
    double area = c.get_area();
    cout << "Area of the circle: " << area << endl;

    return 0;
}
