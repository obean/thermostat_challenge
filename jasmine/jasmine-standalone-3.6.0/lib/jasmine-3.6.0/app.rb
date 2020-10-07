require 'sinatra/base'
require 'json'
require '../thermostat.rb'
class Thermostapp < Sinatra::Base 

  get '/' do
    File.read('../thermostat.html')
  end

  post "/temperature" do
    thermostat = Thermostat.instance
    thermostat.update(params[:new_temp])
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    {temperature: thermostat.temperature}.to_json
  end
end