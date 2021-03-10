// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;


import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Random;

/** Servlet that returns a random greeting. */
@WebServlet("/random-greet")
public class RandomGreetingServlet extends HttpServlet {

  private String[] greetings = {"Howdy", "What's popping!", "Bienvenue", "Welcome!"};
  private Random rand = new Random();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Randomly selects the index for the greeting that'll appear on the page
    int greetingChosen = rand.nextInt(4); 
    

    // Convert the server stats to JSON
    String json = convertToJson(greetings, greetingChosen);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

  private String convertToJson(String[] greets, int chosenGreet) {
    String json = "{";
    json += "\"greetMessage\": ";
    json += "\"" + greets[chosenGreet] + "\"";
    json += "}";
    return json;
  }

}
