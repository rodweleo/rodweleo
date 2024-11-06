
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image"

export default function Page() {
    return (
        <div>
            <main>
                <section className="space-y-2.5">
                    <h1 className="font-bold text-4xl">Building a Restful API for Course Management with SpringBoot</h1>
                    <div className="flex items-center gap-5">
                        <p className="flex items-center gap-1">
                            <CalendarDays size={17} /> <span>October, 30 2024</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <Clock size={17} /> <span>5 mins read</span>
                        </p>
                    </div>
                    <figure>
                        <Image
                            src="/images/building-a-restful-api-for-course-management-with-spring-boot.jpg"
                            className="rounded-lg object-fill w-full h-auto aspect-video"
                            width={1000}
                            height={200}
                            alt=""
                            layout="responsive"
                        />
                        <figcaption className="text-center text-sm text-slate-500 mt-2.5">Building a Restful API for Course Management with SpringBoot</figcaption>
                    </figure>
                </section>

                
                
                <article className="space-y-4">
                    <section className="space-y-1">
                        <p>In today’s software development landscape, RESTful APIs enable seamless communication and data sharing across applications. Using Spring Boot, we can create powerful, efficient APIs with minimal setup. In this guide, we’ll walk through the steps of building a RESTful API for managing <strong>Courses</strong> in a learning platform.</p>
                        <h2>Prerequisites</h2>
                        <p>Before we get started, ensure you have the following set up:</p>
                        <ul className="list-decimal ml-5">
                            <li><strong>Java Development Kit (JDK)</strong> 8 or later</li>
                            <li><strong>Maven or Gradle</strong> as a build tool (we’ll use Maven here)</li>
                            <li><strong>IDE</strong> of your choice, such as IntelliJ IDEA, Eclipse, or any Java IDE</li>
                        </ul>
                    </section>
                    <section className="space-y-1">
                        <h2>Step 1: Setting Up a New Spring Boot Project</h2>
                        <p>To begin, create a new Spring Boot project in your IDE:</p>
                        <ul className="list-disc ml-5">
                            <li>Start a new Maven project.</li>
                            <li>Add the necessary dependencies in your <code>pom.xml</code> file:</li>
                        </ul>
                        <pre><code>&lt;dependencies&gt;
                            &lt;dependency&gt;
                            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
                            &lt;/dependency&gt;
                            &lt;/dependencies&gt;
                        </code></pre>
                        <p>This includes the <code>spring-boot-starter-web</code> dependency, which provides all you need to create web applications and APIs.</p>

                    </section>
                    <section className="space-y-1">
                        <h2>Step 2: Creating a REST Controller for Courses</h2>
                        <p>With our project set up, we’ll now create a REST controller to handle HTTP requests for managing courses. Inside the <code>src/main/java</code> folder, create a package and class as follows:</p>

                        <pre>
                            <code>
                                {`
package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private List<String> courses = new ArrayList<>();

    @GetMapping
    public List<String> getAllCourses() {
        return courses;
    }

    @PostMapping
    public String createCourse(@RequestBody String course) {
        courses.add(course);
        return "Course added: " + course;
    }

    @DeleteMapping("/{course}")
    public String deleteCourse(@PathVariable String course) {
        if (courses.contains(course)) {
            courses.remove(course);
            return "Course removed: " + course;
        }
        return "Course not found";
    }
}
                    `}
                            </code>
                        </pre>
                        <p>In this code:</p>
                        <ul className="list-decimal ml-5">
                            <li><strong>createCourse</strong> adds a course when a <code>POST</code> request is sent, appending it to the <code>courses</code> list.</li>
                            <li><strong>deleteCourse</strong> removes a specified course when a <code>DELETE</code> request is made, provided it exists in the list.</li>
                        </ul>
                    </section>

                    <section className="space-y-1">
                        <h2>Step 3: Running the Application</h2>
                        <p>To run the API:</p>
                        <ul className="space-y-1 list-decimal ml-5">
                            <li>Locate and run the main application class (usually <code>DemoApplication</code> in the root package).</li>
                            <li>Navigate to <code>http://localhost:8080/api/courses</code> to verify the setup.</li>
                        </ul>
                    </section>

                    

                    <section>
                        <h2>Step 4: Testing the Course API</h2>
                        <p>To test the functionality, you can use cURL or Postman:</p>
                        <ul className="list-decimal ml-5 space-y-2">
                            <li>
                                <div>
                                    <strong>Add a new course</strong>:
                                    <pre><code>curl -X POST -H &quot;Content-Type: application/json&quot; -d &quot;Introduction to Java&quot; http://localhost:8080/api/courses</code></pre>
                                    <p>Response: <code>&quot;Course added: Introduction to Java&quot;</code></p>
                                </div>

                            </li>

                            <li><div>
                                <strong>Get all courses: </strong>
                                <pre><code>curl http://localhost:8080/api/courses</code></pre>
                                <p>Response: <code>[&quot;Introduction to Java&quot;]</code></p>
                            </div>
                            </li>
                            <li><div>
                                <strong>Delete a course</strong>:
                                <pre><code>curl -X DELETE http://localhost:8080/api/courses/Introduction%20to%20Java</code></pre>
                                <p>Response: <code>&quot;Course removed: Introduction to Java&quot;</code></p>
                            </div>
                            </li>
                        </ul>
                    </section>
                    <p>Happy coding!</p>

                </article>
            </main>
        </div>
    )
}