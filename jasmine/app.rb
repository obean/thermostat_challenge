require 'sinatra/base'
require 'json'
require_relative './thermostat.rb'


class Thermostapp < Sinatra::Base 

  get '/' do
    File.read('public/thermostat.html')
  end

  post "/temperature" do
    p params
    thermostat = Thermostat.instance
    thermostat.update(params[:new_temp])
    p thermostat.temperature
    { status: 200 }.to_json
  end

  get "/temperature" do
    thermostat = Thermostat.instance
    p thermostat.temperature
   {temperature: thermostat.temperature}.to_json
  
  end

  run! if app_file == $0
end