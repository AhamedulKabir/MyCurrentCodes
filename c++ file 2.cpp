// Constant object
#include<iostream>

class Circle{
    public: 
    Circle(double radius) : radius_(radius){};

    double get_area() const{
        return 3.14159 * radius_ * radius_;
    }

    private: 
    double radius_;
};

int main(){
    double radius_;
    cout<< "Enter the radius of the circle: ";
    cin >> radius;

    Circle c(radius);
    double area = c.get_area();
    std:: cout << "Area of the circle: "<< area << endl;
    return 0;
}